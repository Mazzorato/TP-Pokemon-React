import { Pokemon } from "./Pokemon";

export function PokemonList({ pokemons, onClick }) {
  return (
    <div className="left-column">
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} onClick={onClick} />
      ))}
    </div>
  );
}
