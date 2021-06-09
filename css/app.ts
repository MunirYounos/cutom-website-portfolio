import { createUseStyles } from 'react-jss';
import { htmlFontSize, baseLinePX, base } from './base';
import colors from './colors';
import { h1,h2,h3,h4,h5, body} from './type';

export default createUseStyles({
	'@global': {
		'html, body': {
			margin: 0, 
		},
		'*': {
			boxSizing: 'border-box',
		},
		html: {
			fontFamily: 'system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
			fontSize: htmlFontSize,
			lineHeight: `${baseLinePX}px`,
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