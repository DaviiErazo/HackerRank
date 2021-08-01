const router = require('express').Router();
const controller = require('../controllers/boards');

router.post('/boards', controller.createBoard);
router.put('/boards/:id', controller.updateBoard);

module.exports = router;
