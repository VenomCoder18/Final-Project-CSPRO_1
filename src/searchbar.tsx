import React, { useState } from "react";
import {fetchData, DataResponse} from "./DataManager";;
interface Pokemon {
  name: string;
}


function SearchBar() {
  const pokemons: Pokemon[] = [
    { name: "Snivy" },
    { name: "Pikachu" },
    { name: "Charmander" },
    { name: "MewTwo" },
    { name: "Bulbasaur" },
    { name: "Squirtle" },
    { name: "Eevee" }
  ];

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Pokemon[]>(pokemons);
  const [choosePokemon, setChoosePokemon] = useState ("")
  const [pokemonStats, setPokemonStats] = useState("")
  async function handleChange(event: React.ChangeEvent<HTMLInputElement>){
    const term = event.target.value;
    setSearchTerm(term);
    const results = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
    async function handleSelect(pokemon: Pokemon);
    setChoosePokemon(pokemon);
    const response = await fetchData("https://pokeapi.co/api/v2/pokemon/" + pokemons)
    if(response.status === "SUCCESS") {
      const data = response.data;
      setPokemonStats(data.stats.hp);
    }
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map(pokemon => (
          <li key={pokemon.name} onClick={() => handleSelect(pokemon)}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );

}

export default SearchBar;

