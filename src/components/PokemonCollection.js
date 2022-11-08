import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonData}) {

  // console.log(pokemonData);

  const pokemonCards = pokemonData.map((pokemon) => {
    return (<PokemonCard key={pokemon.id} {...pokemon} />);
  });


  return (
    <Card.Group itemsPerRow={6}>
      {pokemonCards}
    </Card.Group>
    // <Card.Group itemsPerRow={6}>
    //   <h1>Hello From Pokemon Collection</h1>
    // </Card.Group>
  );
}

export default PokemonCollection;
