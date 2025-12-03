import { useState } from "react";

export function SearchBar({ onSearch }) {
  const [searchPoke, setSearchPoke] = useState("");

  function handleSearch() {
    // Si la recherche est vide, rien ne se passe
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

      setSearchPoke("");
    })
    .catch((error) => {
      console.error(error);
      alert("Ce Pokémon n'existe pas ou le nom est mal écrit !");
    });
  }

  
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchPoke}
        onChange={(event) => setSearchPoke(event.target.value)}
        placeholder="Tape un nom, exemple: Dracaufeu"
      />
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
}
