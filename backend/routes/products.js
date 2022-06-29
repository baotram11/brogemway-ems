const router = require('express').Router();

const ProductController = require('../controllers/product.controller');

//Get a list of all products
router.get('/', ProductController.getAllProducts);

//Get a product by ProID
router.get('/:id', ProductController.findProductById);

//Create a new product
router.post('/', ProductController.createNewProduct);

//Update a product by ProID
router.patch('/:id', ProductController.updateAProduct);

//Delete a product by ProID
router.delete('/:id', ProductController.deleteAProduct);

module.exports = router;
