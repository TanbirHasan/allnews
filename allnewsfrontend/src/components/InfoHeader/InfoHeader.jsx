import React from 'react';
import { Box ,Typography} from '@material-ui/core';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    textparent : {

        background : '#f44336',
        color : '#ffffff',
        height : '48',
        display : 'flex',
        alignItems : 'center',
        padding : '10px'
    },
    text : {
        fontSize : '14px',
        fontFamily : 'roboto'

    },
    logo : {
        height : '34px'
    }
})

const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

const InfoHeader = () => {

    const classes = useStyles()
    return (
        <Box className={classes.textparent}>
            <Typography className={classes.text} >For the best experience use <b>inshorts</b> app on your smartphone</Typography>
            <Box style={{marginLeft : 'auto'}}>
                <img src={appleStore} alt="apple-store" className={classes.logo}/>
                  <img src={googleStore} alt="google-store"  className={classes.logo}/>
            </Box>
        </Box>
    );
};

export default InfoHeader;