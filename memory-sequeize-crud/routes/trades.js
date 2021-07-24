const express = require('express');
const router = express.Router();
const tradeController = require('../controllers/trades');

router.post('/', tradeController.createTrade);
router.get('/', tradeController.getAllTrades);
router.get('/:id', tradeController.getTradeById);
router.put('/:id', tradeController.notAllowedMethod);
router.delete('/:id', tradeController.notAllowedMethod);
router.patch('/:id', tradeController.notAllowedMethod);

module.exports = router;
