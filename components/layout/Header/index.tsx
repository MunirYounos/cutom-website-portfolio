import React from 'react';
import useStyles from './css';

const Header: React.FC = () => {
	const classes = useStyles();
	return (
		<header className={classes.header}>
			<div>
				logo
			</div>
			<div>
				menu 
			</div>
		</header>
	)
}

export default Header;