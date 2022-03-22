import {Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@mui/styles';

import React from 'react';

const useStyles = makeStyles({
    image : {
        height : '250px',
        width : '88%',
        borderRadius : '5px',
    }

})

const News = ({article}) => {
    const classes = useStyles()
    return (
        <>
         <Card>
            <CardContent>
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <img src={article.url} alt="news-pic" className={classes.image}/>

                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                       <Typography>{article.title}</Typography>
                       <Typography>
                           <b>Short</b> by {article.author} {new Date(article.timestamp).toDateString}
                       </Typography>
                       <Typography>{article.description}</Typography>
                       <Typography>
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