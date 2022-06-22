const express = require('express');
const routes = require('./routes');
const setupDB = require('./utils/db');

import Products from './data';

const app = express();

app.get('api/products', (req, res) => {
	res.send(Products.data);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`);
});
