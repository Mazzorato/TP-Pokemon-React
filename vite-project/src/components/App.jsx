import React, { useEffect, useState } from "react";
// import { Pokemon } from "./Pokemon";
import { PokemonList } from "./PokemonList";
import { PokemonDetail } from "./PokemonDetail";
import { SearchBar } from "./SearchBar";

import "./App.css";

export function App() {
  const [currentPokemon, setPokemon] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const handleEvolutionClick = (pokedexId) => {
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pokedexId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erreur lors de la récupération de l'évolution");
        }
        return res.json();
      })
      .then((data) => {
        // 2. On met à jour l'affichage principal
        setPokemon(data);
      })
      .catch((err) => console.error(err));
  };

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
      {/* <Pokemon
        // pokemon={currentPokemon?.name}
        // id={currentPokemon?.id}
        // image={currentPokemon?.image}
        /> */}
      <PokemonList
        pokemons={pokemons}
        onClick={setPokemon}
      />

      <div className="right-column">
        {/* Barre de recherche */}
        <SearchBar onSearch={setPokemon} />
        {/* Partie droite */}
        <PokemonDetail
          pokemon={currentPokemon}
          onClickEvolution={handleEvolutionClick}
        />
      </div>
    </div>
  );
}
