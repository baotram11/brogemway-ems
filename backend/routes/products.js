const router = require('express').Router();

let Product = require('../models/product.model');

router.route('/').get((req, res) => {
    Product.find()
        .then((products) => res.json(products))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Product.findById(req.params.id)
        .then((products) => res.json(products))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const proID = req.params.ProID;
    const proName = req.params.ProName;
    const price = req.params.Price;
    const description = req.params.Description;
    const catID = req.params.CatID;

    const newProduct = new Product({
        proID,
        proName,
        price,
        description,
        catID,
    });
    console.log(newProduct);
    newProduct
        .save()
        .then(() => res.json('New Product added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});
module.exports = router;
