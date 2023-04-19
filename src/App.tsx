import React from 'react';
import Pokemon from './Pokemon';
import './App.css';
import SearchBar from './searchbar';
function App() {
  return (
    <div className="App">
      Welcome to NU's Pokemon Adoption Center 
      <Pokemon/>
      <p>
        <SearchBar/>
      </p>
    </div>
  );
}

export default App;