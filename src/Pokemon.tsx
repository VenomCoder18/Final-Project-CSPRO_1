import React, {useState} from 'react';
import {fetchData, DataResponse} from "./DataManager";

function Pokemon(){
  const [pokemon, setPokemon] = useState('bulbasaur');
  const [picUrl, setPicUrl] = useState("");
  async function handleClick(event: any){
    setPokemon(event.target.value);
    const response = await fetchData("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    if(response.status === "SUCCESS") {
      const data = response.data;
      setPicUrl(data.sprites.front_shiny);
    }
  }

  return(<div>
    <select value={pokemon} onChange={handleClick}> 
      <option value="bulbasaur">Bulbasaur</option>
      <option value='squirtle'>Squirtle</option>
      <option value='charmander'>Charmander</option>
    </select>
    <img src={picUrl}/>
  </div>)
}

export default Pokemon