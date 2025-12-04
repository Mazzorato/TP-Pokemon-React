 import { useState } from "react";
// import { PokemonList } from "./PokemonList";
// import { PokemonDetail } from "./PokemonDetail"; 

export function Pokemon({ name, id, image }) {

  const [pokemons, setPokemons] = useState([
    
  ]);

  

  return (
    <div>
      <PokemonList pokemons={pokemons} setPokemons={setPokemons}/>
      <div className="pokemon-test">
        
        <p>{name}</p>
        <p> {id}</p>
        <img src={image} />
      </div>
    </div>
  );
}
