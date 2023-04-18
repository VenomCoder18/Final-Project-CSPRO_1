import React from 'react';
import logo from './logo.svg';
import Pokemon from './Pokemon';
import './App.css';
import Search from './searchbar';

// Comment to practice pull request :)
// Comment to practice new branch

function App() {
  return (
    <div className="App">
      Welcome to NU's Pokemon Adoption Center 
      <Pokemon/>
      <p>
        <Search/>
      </p>
    </div>
  );
}

export default App;
