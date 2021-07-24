const TradeModel = require("../models/trades");
const { Op } = require("sequelize");

class TradesController {
  createTrade = async (req, res) => {
    try {
      const body = req.body;
      const countTrades = await TradeModel.count();
      const id = parseInt(countTrades) + 1;

      body.id = id;

      const response = await TradeModel.create(body);
      res.status(201).send(response);
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  };

  getAllTrades = async (req, res) => {
    try {
      const { type, user_id } = req.query;
      let trades;

      if (type && user_id) {
        trades = await TradeModel.findAll({
          where: {
            [Op.and]: [{ user_id }, { type }],
          },
        });
      } else if (type) {
        trades = await TradeModel.findAll({
          where: {
            [Op.and]: [{ type }],
          },
        });
      } else if (user_id) {
        trades = await TradeModel.findAll({
          where: {
            [Op.and]: [{ user_id }],
          },
        });
      } else {
        trades = await TradeModel.findAll();
      }
      res.status(200).send(trades);
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  };

  getTradeById = async (req, res) => {
    const { id } = req.params;
    try {
      const trade = await TradeModel.findOne({ where: { id } });
      const existTrade = !!trade;

      if (!existTrade) {
        res.status(404).send("ID not found");
      } else {
        res.status(200).send(trade);
      }
    } catch (error) {
      res.status(500);
    }
  };

  notAllowedMethod = (req, res) => {
    res.status(405).json({ message: "Not allowed" });
  }
}

module.exports = new TradesController();
