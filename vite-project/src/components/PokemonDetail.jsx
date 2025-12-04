//  import { useState } from "react";

export function PokemonDetail({ pokemon, onClickEvolution }) {
  //  const [currentPokemon, setCurrentPokemon] = useState([0]);
  if (!pokemon) {
    return (
      <div className="Pokemon-detail-item">
        <p> Sélectionner un pokémon pour voir les détails</p>
      </div>
    );
  }
  return (
    <div className="Pokemon-detail">
      <div className="image-detail">

      {/* Image du Pokémon */}
      <img src={pokemon.image} alt={pokemon.name} />
      </div>

      {/* Nom du Pokémon */}
      <p> {pokemon.name}</p>

      {/* Types du Pokémon */}
      <h3>Types</h3>
      <p> {pokemon.types} </p>
      {pokemon.apiTypes?.map((type) => (
        <img key={type.name} src={type.image} alt={type.name} />
      ))}

      {/*Evolution du Pokémon*/}
      {pokemon.apiEvolutions && pokemon.apiEvolutions.length > 0 && (

        <div >
        <h3>Evolution</h3>
        <div className="evolution-container">
          {pokemon.apiEvolutions.map((evolution) => (
            <div
            key={evolution.pokedexId}
            className="evolution-item"
            onClick={() => onClickEvolution?.(evolution.pokedexId)}
            >
            <p>{evolution.name}</p>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolution.pokedexId}.png`}
            alt={evolution.name} />
            </div>
          ))}
          </div>
        </div>
        )}
    </div>
  );
}
