 import { useState } from "react";
import { PokemonList } from "./PokemonList";
import { PokemonDetail } from "./PokemonDetail"; 

export function Pokemon({ name, id, image }) {

  const [pokemons, setPokemons] = useState([
    { id: 1, name: "bulbizarre"},
  ]);

  

  return (
    <div>
      <PokemonList pokemons={pokemons} setPokemons={setPokemons}/>
      <div className="pokemon">
        
        <p>{name}</p>
        <p> {id}</p>
        <img src={image} />
      </div>
    </div>
  );
}
