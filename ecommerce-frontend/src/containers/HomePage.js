import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from '../components/Product';
import { Typography } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(2)
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
}));

export default function HomePage() {
	const classes = useStyles();
	const [ products, setProducts ] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get('/api/products');
			setProducts(data);
		};
		fetchProducts();
	}, []);

	return (
		<div className={classes.root}>
			<Typography>Latest Products</Typography>
			<Grid container spacing={3}>
				{products.map((product) => (
					<Grid item={true} xs={12} md={6} lg={3} key={product._id}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</div>
	);
}
