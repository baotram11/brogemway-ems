const mongoose = require('mongoose');
const createError = require('http-errors');
const Product = require('../models/product.model');

module.exports = {
    getAllProducts: async (req, res, next) => {
        try {
            const results = await Product.find();

            if (!results) {
                throw createError(404, 'Products are not found.');
            }

            res.send(results);
        } catch (error) {
            if (error instanceof mongoose.CastError) {
                return next(createError(400, error.message));
            }

            next(error);
        }
    },

    createNewProduct: async (req, res, next) => {
        try {
            const proID = req.body.ProID;
            const proName = req.body.ProName;
            const price = req.body.Price;
            const description = req.body.Description;
            const catID = req.body.CatID;

            const newProduct = new Product({
                ProID: proID,
                ProName: proName,
                Price: price,
                Description: description,
                CatID: catID,
            });

            const result = await newProduct.save();
            res.send(result);
        } catch (error) {
            if (error.name === 'ValidationError') {
                return next(createError(422, error.message));
            }

            next(error);
        }
    },

    findProductById: async (req, res, next) => {
        const id = req.params.id;
        try {
            const product = await Product.find({ ProID: id });
            if (!product) {
                throw createError(404, 'Product does not exist.');
            }
            res.send(product);
        } catch (error) {
            if (error instanceof mongoose.CastError) {
                return next(createError(400, 'Invalid Product id'));
            }

            next(error);
        }
    },

    updateAProduct: async (req, res, next) => {
        try {
            const id = req.params.id;
            const updates = req.body;

            const result = await Product.findOneAndUpdate(
                { ProID: id },
                updates
            );
            if (!result) {
                throw createError(404, 'Product does not exist');
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);

            if (error instanceof mongoose.CastError) {
                return next(createError(400, error.message));
            }

            next(error);
        }
    },

    deleteAProduct: async (req, res, next) => {
        const id = req.params.id;

        try {
            const result = await Product.findOneAndDelete({
                ProID: req.params.id,
            });
            if (!result) {
                throw createError(404, 'Product does not exist');
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);

            if (error instanceof mongoose.CastError) {
                return next(createError(400, error.message));
            }

            next(error);
        }
    },
};
