const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    CatID: {
        type: Number,
        unique: true,
        required: true,
    },
    CatName: {
        type: String,
        required: true,
    },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
