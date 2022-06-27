const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        ProID: {
            type: Number,
            required: true,
            unique: true,
        },
        ProName: {
            type: String,
            required: true,
        },
        Price: {
            type: String,
            required: true,
        },
        Description: {
            type: String,
            required: true,
        },
        CatID: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
