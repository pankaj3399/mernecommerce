import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 300,
		height: 300,
		padding: theme.spacing(2)
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	avatar: {
		backgroundColor: red[500]
	}
}));

export default function Product(props) {
	const classes = useStyles();
	const { product } = props;

	return (
		<Card className={classes.root}>
			{/* <CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						R
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={product.name}
				subheader="September 14, 2016"
			/> */}
			<Link to={`/product/${product._id}`}>
				<CardMedia className={classes.media} image={product.image} title="Paella dish" />
			</Link>
			<CardContent>
				<Link to={`/product/${product._id}`}>
					<Typography variant="body2" color="textSecondary" component="p">
						{product.name}
					</Typography>
				</Link>
				{/* Rating component can be made to show stars  */}
				<Typography variant="body2" color="textSecondary" component="p">
					{`${product.rating} from ${product.numReviews} reviews`}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{`$ ${product.price}`}
				</Typography>
			</CardContent>
			{/* <CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
			</CardActions> */}
		</Card>
	);
}
