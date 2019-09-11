import React from 'react';

function List({pokedata}) {
    return(
        <div>
            <h1>Lista de pókemons</h1>
            <ul>
                {pokedata.map((pokemon,index) => {
                    return (
                        <li key={index}>
                            {pokemon.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default List;