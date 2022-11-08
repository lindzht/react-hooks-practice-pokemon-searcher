import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemonData, setPokemonData] = useState([])
  const [searchResults, setSearchResult] = useState("")



  useEffect(()=> {
    fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(data => setPokemonData(data))
  }, [])

  function handleSearchResult (result){
    setSearchResult(result);
  }

  const filteredPokemon = pokemonData.filter((pokemon)=> {
    return (pokemon.name.includes(searchResults.toLowerCase()))
  })




  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search searchFunction={handleSearchResult}/>
      <br />
      <PokemonCollection pokemonData={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
