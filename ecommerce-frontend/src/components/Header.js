import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	displayFlex: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		minHeight: '64px'
	}
}));

export default function Header() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar color="secondary" position="static">
				<div className={classes.displayFlex}>
					{/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton> */}
					<div>
						<Link to={`/`}>
							<Typography variant="h6" className={classes.title}>
								OneShop
							</Typography>
						</Link>
					</div>
					<div>
						<Link to={`/cart`}>
							<Button color="inherit">Cart</Button>
						</Link>
						<Link to={`/login `}>
							<Button color="inherit">Login</Button>
						</Link>
					</div>
				</div>
			</AppBar>
		</div>
	);
}
