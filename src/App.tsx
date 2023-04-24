import React from 'react';
import Pokemon from './Pokemon';
import './App.css';
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
      </p>
    </div>
  );
}

export default App;