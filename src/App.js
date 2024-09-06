import logo from './logo.svg';
import './App.css';
import Shakila from './Shakila';
import Dog from './Dog';
import DieRoll from './DieRoll';
import RandomPokemon from './RandomPokemon';

//testing out the functionalities of react.
function App() {
  return (
    <div className="App">
      <RandomPokemon />
      <RandomPokemon />
      <RandomPokemon />

      <Shakila />
      <Dog />
      <DieRoll />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!!
        </a>
      </header>
    </div >
  );
}

export default App;

