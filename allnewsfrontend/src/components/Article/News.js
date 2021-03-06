import {Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';


import React from 'react';

const useStyles = makeStyles(theme =>({
    image : {
        height : '250px',
        width : '88%',
        borderRadius : '5px',
    },
    component : {
        
        marginBottom : '20px',
        boxShadow : '0 2px 5px 0 rgb(0,0,0/16%),0 2px 10px 0 rgb(0,0,0/12%)'
    },
    container : {
        padding : '6px',
        paddingBottom : '4px!important'

    },
    rightContainer : {
        margin : '5px 0px 0 -25px',
        [theme.breakpoints.down('sm') ] : {
           margin : '5px 0',
        },
        display : 'flex',
        flexDirection : 'column',
      

    },
    title : {
        fontSize : '22px',
        fontWeight : '600',
        lineHeight : '25px'

    },
    author : {
        fontSize : '12px',
        lineHeight : '22px',
        color : '#808290'

    },
    description : {
        lineHeight : '24px',
        color : '#44444'
    },
    publisher : {
        fontSize : 12,
        "& > *" : {
            textDecoration : 'none',
            color : '#000',
            fontWeight : 900,
        }

    }


}))


const News = ({article}) => {
    const classes = useStyles()
    return (
        <>
         <Card className={classes.component}>
            <CardContent className={classes.container}>
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12} >
                        <img src={article.url} alt="news-pic" className={classes.image}/>

                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12} className={classes.rightContainer}>
                       <Typography className={classes.title}>{article.title}</Typography>
                       <Typography className={classes.author}>
                           <b>Short</b> by {article.author} {new Date(article.timestamp).toDateString}
                       </Typography>
                       <Typography className={classes.description}>{article.description}</Typography>
                       <Typography className={classes.publisher}>
                           read more at <a href={article.link} target="_black">{article.publisher}</a>
                       </Typography>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
        </>
       
    );
};

export default News;