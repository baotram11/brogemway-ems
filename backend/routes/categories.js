const router = require('express').Router();

const CategoryController = require('../controllers/category.controller');

//Get a list of all categories
router.get('/', CategoryController.getAllCategories);

//Get products by CatID
router.get('/:id', CategoryController.findProductsByCatId);

//Create a new category
router.post('/', CategoryController.createNewCategory);

//Update a category by CatID
router.patch('/:id', CategoryController.updateACategory);

//Delete a category by CatID
router.delete('/:id', CategoryController.deleteACategory);

module.exports = router;
