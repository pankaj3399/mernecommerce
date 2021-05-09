import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/products', (req, res) => {
	res.json(products);
});

app.get('/api/product/:id', (req, res) => {
	const id = req.params.id;
	const product = products.find((product) => product._id === id);
	res.json(product);
});

app.listen(5000, console.log(`Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`));
