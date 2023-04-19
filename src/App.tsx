import React from 'react';
import Pokemon from './Pokemon';
import './App.css';
import SearchBar from './SearchBar';
// Comment to practice pull request :)
// Comment to practice new branch

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