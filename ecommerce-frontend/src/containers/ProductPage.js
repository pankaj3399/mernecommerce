import { Button, Grid, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import ProductTable from '../components/ProductTable';
import axios from 'axios';
const ProductPage = (props) => {
	const { id } = props.match.params;
	const [ product, setProduct ] = useState([]);

	useEffect(() => {
		const fetchProduct = async () => {
			const { data } = await axios.get(`/api/product/${id}`);
			setProduct(data);
		};
		fetchProduct();
	}, []);
	return (
		<div>
			<Button>Go Back</Button>
			<Grid container>
				<Grid item xs={12} md={4}>
					<img src={product.image} alt="Product here" height={'300px'} width="300px" />
				</Grid>
				<Grid item xs={12} md={4}>
					<Typography>{product.name}</Typography>
					<Typography>{product.rating}</Typography>
					<Typography>{product.price}</Typography>
					<Typography>{product.description}</Typography>
				</Grid>
				<Grid item xs={12} md={4}>
					<ProductTable price={product.price} status={product.countInStock} />
				</Grid>
			</Grid>
		</div>
	);
};

export default ProductPage;
