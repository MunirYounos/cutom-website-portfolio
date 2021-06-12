import { createUseStyles } from 'react-jss';
import { base } from '../../../css/base';
import  colors from '../../../css/colors';


export default createUseStyles({
	footer: {
		padding: base(2),
		backgroundColor: colors.gray,
		color:colors.white,
	}
})