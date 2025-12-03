//  import { useState } from "react";

export function PokemonDetail({ pokemon, evolution }) {

//  const [currentPokemon, setCurrentPokemon] = useState([0]);
 if (!pokemon) {
  return(
    <div className="Pokemon-detail-item">
      <p> Sélectionner un pokémon pour voir les détails</p>
    </div>
  )
 }
    
  return (
    <div className="Pokemon-detail">



      {/* Image du Pokémon */}
      <img src={pokemon.image} alt= {pokemon.name}/>

      {/* Nom du Pokémon */}
      <p> {pokemon.name}</p>

      {/* Types du Pokémon */}
      <h3>Types</h3>
      <p> {pokemon.types} </p>
        {pokemon.apiTypes?.map((type)=> (
          <img key={type.name} src={type.image} alt={type.name} />
        ))} 




      {evolution && (
        <div>
      <p> {evolution.name}</p>
      <p> {evolution.types}</p>
      <img src={evolution.image}/>
    </div>
    )}
    </div>
  );
}
