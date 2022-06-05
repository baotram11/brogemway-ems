import express from 'express';
import Products from './data';

const app = express();

app.get('api/products', (req, res) => {
  res.send(Products.data);
});

const port = process.env.PORT || 5000;

// add listen port
app.listen(port, () => {
    console.log(`Online auction app listening at http://localhost:${port}`);
})