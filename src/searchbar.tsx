import React, { useState } from "react";
interface Pokemon {
  name: string;
}

const SearchBar: React.FC = () => {
  const pokemons: Pokemon[] = [
    { name: "Ivy" },
    { name: "Pikachu" },
    { name: "Charmander" },
    { name: "MewTwo" },
    { name: "Bulbasaur" },
    { name: "Squirtle" },
    { name: "Evee" }
  ];

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Pokemon[]>(pokemons);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    const results = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

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
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;