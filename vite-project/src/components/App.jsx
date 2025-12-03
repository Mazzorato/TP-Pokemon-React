import React, { useEffect, useState } from "react";
import { Pokemon } from "./Pokemon";
import { PokemonList } from "./PokemonList";
import { PokemonDetail } from "./PokemonDetail";
import { SearchBar } from "./SearchBar";

import "./App.css";

export function App() {
  const [currentPokemon, setPokemon] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const evolution = null;

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/151")
      .then((res) => {
        if (!res.ok) {
          throw "Error serveur";
        }
        return res.json();
      })
      .then((pokemons) => {
        setPokemons(pokemons);
        setPokemon(pokemons[0]);
      });
  }, []);

  return (
    <div className="app">
      {/* Partie gauche */}
      <div className="left-column">
        <Pokemon
          pokemon={currentPokemon?.name}
          id={currentPokemon?.id}
          image={currentPokemon?.image}
        />
        <PokemonList pokemons={pokemons} onClick={setPokemon} />
      </div>

      {/* Partie droite */}
      <PokemonDetail pokemon={currentPokemon} evolution={evolution} />

      {/* Barre de recherche */}
      <SearchBar onSearch={setPokemon} />
    </div>
  );
}
