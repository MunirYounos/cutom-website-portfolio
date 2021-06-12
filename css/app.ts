import { createUseStyles } from 'react-jss';
import { htmlFontSize, baseLinePX, base } from './base';
import colors from './colors';
import { h1,h2,h3,h4,h5, body} from './type';
import queries from './queries';

export default createUseStyles({
	'@global': {
		'html, body': {
			margin: 0, 
		},
		'*': {
			boxSizing: 'border-box',
		},
		html: {
			fontFamily: '\'Manrope\', sans-serif',
			fontSize: htmlFontSize,
			backgroundColor: colors.antique,
			lineHeight: `${baseLinePX}px`,
			[queries.m]: {
				fontSize: htmlFontSize * 0.75,
			},
		},
		h1,
		h2,
		h3,
		h4,
		h5,
		p:{
			...body,
		},
		ol: {
			padding: `0 0 0 ${base()}`,
			margin: `0 0 ${base()} 0`,
		},
		ul: {
			padding: `0 0 0 ${base()}`,
			margin: `0 0 ${base()} 0`,
		},
		li: {
			...body,
		},
	},
	app: {
		height: '100%',
	}
});