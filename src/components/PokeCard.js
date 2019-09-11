import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

function PokeCard(props){
    return(
        <Card>
            <CardMedia />
            <CardContent>
                <Typography>Nombre del pókemon</Typography>
            </CardContent>
        </Card>
    );
}

export default PokeCard;