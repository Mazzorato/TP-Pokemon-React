import { useEffect, useState } from "react";

export function SearchBar({ onSearch }) {
  const [searchPoke, setSearchPoke] = useState("");

  function handleSearch(event) {
    // Si la recherche est vide, rien ne se passe
    setSearchPoke(event.target.value);
    
  }
  
  useEffect(()=>{
    if (!searchPoke) return;
    
    //Fetch lorsqu'on utilise le clavier pour écrire dans la recherche
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${searchPoke}`)
      .then((res) => {
        // Si erreur (pokémon introuvable)
        if (!res.ok) {
          throw new Error("Pokémon introuvable");
        }
        return res.json();
      })
      .then((data) => {
        // Envoie le résultat à App

        
        onSearch(data);

      })
      .catch((error) => {
        console.error(error);
      ("Ce Pokémon n'existe pas ou le nom est mal écrit !");
      });
  },[searchPoke]);

  return (
    <div>
      <input
        type="text"
        value={searchPoke}
        onChange={handleSearch}
        placeholder="Tape un nom, exemple: Dracaufeu"
        />
    </div>
  );
}
