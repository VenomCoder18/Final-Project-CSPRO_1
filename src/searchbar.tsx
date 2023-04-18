import React, {useState} from 'react';

function Search() {
  const [searchInput, setSearchInput] = useState(" "); 
  const pokemonName = [
    {name: "Pikachu"},
    {name: "Charmander"},
    {name: "Squirtle"},
    {name: "Ivy"},
    {name: "Bulbasaur"},
    {name: "Weddle"},
    {name: "Pidgey"}, 
    {name: "MewTwo"},
    {name: "Charizard"},
    {name: "Snorlax"},
  ]
  const handleChange = (e : any) => {
    e.preventDefault();
    setSearchInput(e.target.value)
  }
  if (searchInput.length > 0) {
    pokemonName.filter((pokemon) => {
    return pokemon.name.match(searchInput);
    })
  }
  return <div>
    <input 
      type="search"
      placeholder="Search here"
      onChange={handleChange}
      value={searchInput} />
    <table>
      <tr>
        <th>Pokemon</th>
      </tr>
    </table>
  </div>
}

export default Search