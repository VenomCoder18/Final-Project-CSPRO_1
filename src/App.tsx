import React from 'react';
import './App.css';
<<<<<<< HEAD
import SearchBar from './SearchBar';
import Caretaker from './Caretaker';
function App() {
  return (
    <div className="App">
      Welcome to NU's Pokemon Adoption Center 
      <p>
        <SearchBar/>
      </p>
      <p>
        <Caretaker/>
=======
import SearchBar from './searchbar';
import Caretaker from './Caretaker';
import Shop from './Shop';
import Item from './item.ts'
export default App;

function App() {
  return (
    <div className="App">
      <p>
        <SearchBar/>
      </p>
        <Caretaker/>
      <p>
        <Shop supply={supply} itemUrl={itemUrl}/>
>>>>>>> 65c23318a991ce8a445f0a7936e1221677e120e8
      </p>
    </div>
  );
}

// Holds possible options in the shop
const supply: Item[] = [
  {name: "Potion", description: "A spray-type medicine for treating wounds. It can be used to restore 20 HP to a single Pokémon.", cost: 200},
  {name: "Antidote", description: "A spray-type medicine for treating poisoning. It can be used to lift the effects of being poisoned from a single Pokémon.", cost: 200},
  {name: "Burn-heal", description: "A spray-type medicine for treating burns. It can be used to heal a single Pokémon suffering from a burn.", cost: 200},
  {name: "Paralyze-heal", description: "A spray-type medicine for treating paralysis. It can be used to free a single Pokémon that has been paralyzed.", cost: 200},
  {name: "Revive", description: "A medicine that can be used to revive a single Pokémon that has fainted. It also restores half of the Pokémon’s max HP.", cost: 2000},
];

// Holds each item's image url
const itemUrl: string[] = [
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/antidote.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/burn-heal.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/paralyze-heal.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/revive.png"
]