//import { useState } from "react";


export function PokemonList({ pokemons, onClick }) {


 
  return (
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="pokemon-item"
        onClick={() => onClick(pokemon)}>
          <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
      ))}
    </div>
  );
}
