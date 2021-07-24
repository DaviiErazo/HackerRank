const router = require('express').Router();
const controller = require('../controllers/products');

router.post('/products', controller.createProduct);
router.get('/products', controller.getProducts);
router.put('/products/:id', controller.deleteProductById);
router.delete('/products/:id', controller.deleteProductById);
router.patch('/products/:id', controller.patchProductById);

module.exports = router;
