import './App.css';
import SearchBar from './searchbar';
import Caretaker from './Caretaker';
import Shop from './Shop';
import Item from './item';

type AppProps = {
  supply: Item[],
}

function App(props: AppProps) {
  return (
    <div className="App">
      <header style = {{fontSize:50, textAlign: "center"}}>Welcome to NU's Pokémon Adoption Center </header>
      <p>
        <SearchBar/>
      </p>
        <Caretaker/>
      <p>
        <Shop supply={props.supply}/>
      </p>
    </div>
  );
}

export default App;