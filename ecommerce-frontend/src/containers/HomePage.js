import products from '../products';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from '../components/Product';
import { Typography } from '@material-ui/core';

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
