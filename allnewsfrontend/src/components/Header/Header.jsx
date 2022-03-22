import React from 'react';

import { AppBar,Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const useStyles = makeStyles({
    header : {
        background : '#fff!important',
        height : 70,
        borderBottom :' 1px solid black',

    },
    logo : {
        height : '60px',
        margin : 'auto',
    },
    menu : {
        color : 'black',
    }
})

const Header = () => {


    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    const classes = useStyles()
    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <MenuOutlinedIcon className={classes.menu}/>
                <img src={url} alt="logo" className={classes.logo}/>
            </Toolbar>
            
        </AppBar>
    );
};

export default Header;