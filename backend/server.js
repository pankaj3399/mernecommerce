const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/api/products', (req, res) => {
	res.json(products);
});

app.get('/api/product/:id', (req, res) => {
	const id = req.params.id;
	const product = products.find((product) => product._id === id);
	res.json(product);
});

app.listen(5000, console.log('Hello'));
