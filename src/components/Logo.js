import imgSrc from '../images/logo.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    logoWrapper: {
        width: '100px'
    },
    logo: {
        width: '100%'
    }
});
const Logo = () => {
    const classes = useStyles();
    return (
        <div className={classes.logoWrapper}>
            <img className={classes.logo} src={imgSrc} alt="" />
        </div>
    )
}

export default Logo
