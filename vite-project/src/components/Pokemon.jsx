//  import { useState } from "react";
// import { PokemonList } from "./PokemonList";
// import { PokemonDetail } from "./PokemonDetail";

export function Pokemon({ pokemon, onClick }) {
  return (
    <div
      key={pokemon.id}
      className="pokemon-item"
      onClick={() => onClick(pokemon)}
    >
      <div className="infos">
        <p>{pokemon.id}</p>
        <p>{pokemon.name}</p>
      </div>
      <img src={pokemon.image} alt={pokemon.name} />
    </div>
  );
}
