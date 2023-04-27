import React, { useState } from "react";
import fetchData from "./DataManager";

type Pokemon = {
  name: string;
}

type PokemonStats = {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

function SearchBar() {
  const pokemons: Pokemon[] = [
    { name: "Snivy" },
    { name: "Pikachu" },
    { name: "Charmander" },
    { name: "MewTwo" },
    { name: "Bulbasaur" },
    { name: "Squirtle" },
    { name: "Eevee" },
    { name: "Snorlax"},
    { name: "Darkrai"},
    { name: "Miltank"},
    { name: "Wailord"},
    { name: "Latios"},
    { name: "Lapras"},
    { name: "Floatzel"},
    { name: "Pachirisu"},
    { name: "Rattata"},
    { name: "Rowlet"},
    { name: "Litten"},
    { name: "Charizard"},
    { name: "Blastoise"},
    { name: "Lugia"},
    { name: "Machamp"},
    { name: "Machop"},
    { name: "Machoke"},
    { name: "Onix"},
    { name: "Lucario"},
    { name: "Jolteon"},
    { name: "Vaporeon"},
    { name: "Tyranitar"},
    { name: "Slowpoke"},
    { name: "Umbreon"},
    { name: "Flareon"},
    { name: "Tauros"},
    { name: "Giratina"},
    { name: "Zapdos"},
    { name: "Serperior"},
    { name: "Sharpedo"},
    { name: "Ninetales"},
    { name: "Arceus"},
    { name: "Alakazam"},
    { name: "Dragonite"},
    { name: "Arcanine"},
    { name: "Gyarados"},
    { name: "Jigglypuff"},
    { name: "Garchomp"}, 
    { name: "Greninja"},
    { name: "Rayquaza"},
  ];

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Pokemon[]>(pokemons);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();
  const [pokemonStats, setPokemonStats] = useState<PokemonStats>();
  const [picUrl, setPicUrl] = useState();
  const [favoritePokemon, setfavoritePokemon] = useState<Pokemon[]>([]);

  async function handleSelect(pokemon: Pokemon, fromFavoritesList: boolean = false) {
    setSelectedPokemon(pokemon);
    const response = await fetchData(
      `https://pokeapi.co/api/v2/pokemon/` + pokemon.name.toLowerCase()
      );
    if (response.status === "SUCCESS" || fromFavoritesList) {
      const data = response.data;
      setPokemonStats({
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        specialAttack: data.stats[3].base_stat,
        specialDefense: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
      });
    }
    if (response.status === "SUCCESS") {
      const value = response.data;
      setPicUrl(value.sprites.front_shiny)
    } else {
      setPicUrl(undefined)
      setPokemonStats(undefined)
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const term = event.target.value;
    setSearchTerm(term);
    if(term === "") {
      setSelectedPokemon(undefined);
      setPokemonStats(undefined);
    }
    const results = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  }
  function handleFavorite(pokemon: Pokemon){
    if (!favoritePokemon.some((fav) => fav.name === pokemon.name)) {
      setfavoritePokemon([...favoritePokemon, pokemon]);
    }
  }
  function handleRemoveFavorite(pokemon: Pokemon) {
    const filteredFavorites = favoritePokemon.filter((fav) => fav.name !== pokemon.name);
    setfavoritePokemon(filteredFavorites);
    if (selectedPokemon?.name === pokemon.name){
      setSelectedPokemon(undefined);
      setPokemonStats(undefined);
      setPicUrl(undefined);
    }
  }
  return (
    <div>
      <header style={{fontSize:24}}> Search Your Dream Pokémon!</header>
      <p>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={handleChange}
      />
      </p>
      <ul>
        {searchTerm && searchResults.map((pokemon) => (
        <li key={pokemon.name} onClick={() => handleSelect(pokemon)}>{pokemon.name}</li>
        ))}
      </ul>
      {selectedPokemon && (
        <div>
          <h2>{selectedPokemon.name}</h2>
          <button onClick={() => handleFavorite(selectedPokemon)}>
            Add to Favorites
          </button>
          <button onClick={() => handleRemoveFavorite(selectedPokemon)}>
            Remove Favorite
          </button>
          <div/>
          <img src={picUrl}/>
          {pokemonStats && (
            <ul>
              <li>HP: {pokemonStats.hp}</li>
              <li>Attack: {pokemonStats.attack}</li>
              <li>Defense: {pokemonStats.defense}</li>
              <li>Special Attack: {pokemonStats.specialAttack}</li>
              <li>Special Defense: {pokemonStats.specialDefense}</li>
              <li>Speed: {pokemonStats.speed}</li>
            </ul>
          )}
        </div>
      )}  
    <p>
      <select value="" 
        onChange={(event: any) => { 
        const selectedPokemonName = event.target.value;
        const selectedPokemon = favoritePokemon.find((pokemon) => pokemon.name === selectedPokemonName);
        if (selectedPokemon) {
          handleSelect(selectedPokemon, true);
        }
        }}>
          <option value="" disabled>Favorited Pokémon</option>
            {favoritePokemon.map((pokemon) => (
            <option 
            key={pokemon.name} value={pokemon.name}
            onClick={() => handleSelect(pokemon)}>{pokemon.name}
          </option>)
      )}
      </select>
    </p>
  </div>
  );
}
export default SearchBar;