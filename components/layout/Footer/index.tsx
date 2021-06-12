import React from 'react';
import useStyles from './css';

const Footer: React.FC = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<div>
				Footer &copy;
			</div>
		</footer>
	)
}

export default Footer;