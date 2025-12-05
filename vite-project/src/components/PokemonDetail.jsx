import "./PokemonDetail.css";

import { Pokemon } from "./Pokemon";

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
      {/* Id du Pokémon sélectionné*/}
      <p className="id"> N° {pokemon.id}</p>

      {/* Image du Pokémon */}
      <img className="image" src={pokemon.image} alt={pokemon.name} />
      {/* Nom du Pokémon */}
      <p className="nom-type"> {pokemon.name}</p>

      {/* Types du Pokémon */}
      <h3 className="type-title">Types</h3>
      {/* <p> {pokemon.types} </p> */}
      <div className="types-container">
        {pokemon.apiTypes?.map((type) => (
          <img
            class="type-item"
            key={type.name}
            src={type.image}
            alt={type.name}
          />
        ))}
      </div>

      <div className="evolution-container">
        <h3>Evolution</h3>
        {/*Evolution du Pokémon*/}
        {pokemon.apiEvolutions &&
          pokemon.apiEvolutions.length > 0 &&
          pokemon.apiEvolutions.map((evolution) => (
            <Pokemon
              key={evolution.pokedexId}
              pokemon={{
                id: evolution.pokedexId,
                name: evolution.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolution.pokedexId}.png`,
              }}
              onClick={() => onClickEvolution(evolution.pokedexId)}
            />
          ))}
      </div>
    </div>
  );
}
