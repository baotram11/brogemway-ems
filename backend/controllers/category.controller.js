const mongoose = require('mongoose');
const createError = require('http-errors');

const Category = require('../models/category.model');
const Product = require('../models/product.model');

module.exports = {
    getAllCategories: async (req, res, next) => {
        try {
            const results = await Category.find();

            if (!results) {
                throw createError(404, 'Categories are not found.');
            }

            res.send(results);
        } catch (error) {
            if (error instanceof mongoose.CastError) {
                return next(createError(400, error.message));
            }

            next(error);
        }
    },

    findProductsByCatId: async (req, res, next) => {
        const id = req.params.id;
        try {
            const products = await Product.find({ CatID: id });
            if (!products) {
                throw createError(404, 'Category is empty');
            }
            res.send(products);
        } catch (error) {
            if (error instanceof mongoose.CastError) {
                return next(createError(400, 'Invalid Category id'));
            }

            next(error);
        }
    },

    createNewCategory: async (req, res, next) => {
        try {
            const catID = req.body.CatID;
            const catName = req.body.CatName;

            const newCategory = new Category({
                CatID: catID,
                CatName: catName,
            });

            const result = await newCategory.save();
            res.send(result);
        } catch (error) {
            if (error.name === 'ValidationError') {
                return next(createError(422, error.message));
            }

            next(error);
        }
    },

    updateACategory: async (req, res, next) => {
        try {
            const id = req.params.id;
            const updates = req.body;

            const result = await Category.findOneAndUpdate(
                { CatID: id },
                updates
            );
            if (!result) {
                throw createError(404, 'Category does not exist');
            }
            res.send('Updated!');
        } catch (error) {
            console.log(error.message);

            if (error instanceof mongoose.CastError) {
                return next(createError(400, error.message));
            }

            next(error);
        }
    },

    deleteACategory: async (req, res, next) => {
        const id = req.params.id;

        try {
            const result = await Category.findOneAndDelete({
                CatID: id,
            });
            if (!result) {
                throw createError(404, 'Category does not exist');
            }
            res.send(`Deleted the category: ${id} !!`);
        } catch (error) {
            console.log(error.message);

            if (error instanceof mongoose.CastError) {
                return next(createError(400, error.message));
            }

            next(error);
        }
    },
};
