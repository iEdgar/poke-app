import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

function PokeCard({ name, classes, image, to }){
    return(
        <Card className={classes.item}>
            <CardMedia className={classes.media} image={image}/>
            <CardContent>
                <Typography variant="h6" className={classes.color}>{name}</Typography>
            </CardContent>
        </Card>
    ); 
}

export default withStyles({
    item:{
        minWidth: "300px",
        textAlign: "center",
        margin: "1em"
    },
    media:{
        minHeight: "300px"
    },
    color:{
        color: "black"
    }
})(PokeCard);