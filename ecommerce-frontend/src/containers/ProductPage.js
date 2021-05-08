import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import ProductTable from '../components/ProductTable';
import products from '../products';
const ProductPage = (props) => {
	const { id } = props.match.params;

	// find product
	const selectedProduct = products.find((product) => product._id === id);
	return (
		<div>
			<Button>Go Back</Button>
			<Grid container>
				<Grid item xs={12} md={4}>
					<img src={selectedProduct.image} alt="Product here" height={'300px'} width="300px" />
				</Grid>
				<Grid item xs={12} md={4}>
					<Typography>{selectedProduct.name}</Typography>
					<Typography>{selectedProduct.rating}</Typography>
					<Typography>{selectedProduct.price}</Typography>
					<Typography>{selectedProduct.description}</Typography>
				</Grid>
				<Grid item xs={12} md={4}>
					<ProductTable price={selectedProduct.price} status={selectedProduct.countInStock} />
				</Grid>
			</Grid>
		</div>
	);
};

export default ProductPage;
