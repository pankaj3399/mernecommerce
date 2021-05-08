import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
	table: {
		width: 300
	}
});

export default function ProductTable({ price, status }) {
	const classes = useStyles();

	return (
		<Table className={classes.table} size="small">
			<TableBody>
				<TableRow>
					<TableCell component="th" scope="row">
						Price
					</TableCell>
					<TableCell align="right">{price}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell component="th" scope="row">
						Status
					</TableCell>
					<TableCell align="right">{status}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell component="th" scope="row">
						<Button>Add to Cart</Button>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
