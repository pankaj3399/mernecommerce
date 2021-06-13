import express from 'express';
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';
const router = express.Router();

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.json(products);
	})
);

router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const id = req.params.id;
		const product = await Product.findById(id);
		if (product) {
			res.json(product);
		} else {
			res.statusCode(404);
			throw new Error('Product not found');
		}
	})
);

export default router;
