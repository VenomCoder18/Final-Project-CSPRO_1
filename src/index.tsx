import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Item from './item.ts';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Holds possible options in the shop
const supply: Item[] = [
  {name: "Potion", description: "A spray-type medicine for treating wounds. It can be used to restore 20 HP to a single Pokémon.", cost: 200, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png"},
  {name: "Antidote", description: "A spray-type medicine for treating poisoning. It can be used to lift the effects of being poisoned from a single Pokémon.", cost: 200, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/antidote.png"},
  {name: "Burn-heal", description: "A spray-type medicine for treating burns. It can be used to heal a single Pokémon suffering from a burn.", cost: 200, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/burn-heal.png"},
  {name: "Paralyze-heal", description: "A spray-type medicine for treating paralysis. It can be used to free a single Pokémon that has been paralyzed.", cost: 200, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/paralyze-heal.png"},
  {name: "Revive", description: "A medicine that can be used to revive a single Pokémon that has fainted. It also restores half of the Pokémon’s max HP.", cost: 2000, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/revive.png"}
];


root.render(
  <React.StrictMode>
    <App supply={supply} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();