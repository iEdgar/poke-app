import React, { Fragment } from 'react';
import PokeCard from './PokeCard';
import { Grid } from '@material-ui/core';

function List({pokedata}) {
    return(
        <Fragment>
            <Grid container justify="center">
                {pokedata.map((pokemon) => {
                    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/"
                    let pokeIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2]
                    return <PokeCard key={pokeIndex} name={pokemon.name} image={`${url}${pokeIndex}.png`}/>
                })}
            </Grid>
        </Fragment>
    );
}

export default List;