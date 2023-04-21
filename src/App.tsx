import React from 'react';
import './App.css';
import SearchBar from './searchbar';
import Shop from './Shop';
import Item from './item.ts'
import Caretaker from './Caretaker';

function App() {

  return (
    <div className="App">
      <p>
        <SearchBar/>
      </p>
      <Caretaker/>
      <p>
        <Shop supply={supply} itemUrl={itemUrl}/>
      </p>
    </div>
  );
}

const supply: Item[] = [
  {name: "Potion", description: "A spray-type medicine for treating wounds. It can be used to restore 20 HP to a single Pokémon.", cost: 200},
  {name: "Antidote", description: "A spray-type medicine for treating poisoning. It can be used to lift the effects of being poisoned from a single Pokémon.", cost: 200},
  {name: "Burn-heal", description: "A spray-type medicine for treating burns. It can be used to heal a single Pokémon suffering from a burn.", cost: 200},
  {name: "Paralyze-heal", description: "A spray-type medicine for treating paralysis. It can be used to free a single Pokémon that has been paralyzed.", cost: 200},
  {name: "Revive", description: "A medicine that can be used to revive a single Pokémon that has fainted. It also restores half of the Pokémon’s max HP.", cost: 2000},
];

const itemUrl: string[] = [
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/antidote.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/burn-heal.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/paralyze-heal.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/revive.png"
]

export default App;