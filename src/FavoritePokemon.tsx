import React, {useState} from 'react';
import {fetchData, DataResponse} from "./DataManager";

type PokemonList = {
  pokemon: string[]
  inFav: number[]
}

type AddPokemon = {
  
}