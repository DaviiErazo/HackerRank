const Boards = require("../models/boards");

/**
 * Details about the stage
 * 1: TODO
 * 2: In Progress
 * 3: Completed
 */

class BoardController {
  createBoard = async (req, res) => {
    try {
      let board = req.body;
      board.stage = 1;

      const count = Boards.count();
      const boardId = parseInt(count) + 1;
      board.id = boardId;

      const response = await Boards.create(board);

      res.status(201).send(response);
    } catch (error) {
      console.log(error);
      res.status(500).send({});
    }
  };
  updateBoard = async (req, res) => {
    try {
      const { id } = req.params;
      const { stage } = req.body;

      if (stage < 1 || stage > 3) {
        res.status(400).send();
      } else {
        await Boards.update({ stage: stage }, { where: { id } });
        const item = await Boards.findOne({ where: { id } });

        res.status(200).send(item);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({});
    }
  };
}

module.exports = new BoardController();
