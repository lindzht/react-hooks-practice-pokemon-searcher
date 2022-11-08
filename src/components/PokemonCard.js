import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({id, name, hp, sprites}) {

  // {
  //   "id": 2,
  //   "name": "ivysaur",
  //   "hp": 60,
  //   "sprites": {
  //     "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  //     "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
  //   }
  // },

  const [pokemonImage, setPokemonImage] = useState(true);

  const handlePokemonImage = ()=> {
    setPokemonImage(!pokemonImage);
  }

  const imageFlip = pokemonImage ? <img alt="front" src={sprites.front} /> : <img alt="back" src={sprites.back} />
  



  return (
    <Card>
      <div onClick={handlePokemonImage}>
        <div className="image">
          {/* <img alt="oh no!" /> */}
          {imageFlip}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
