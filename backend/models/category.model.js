const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
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
