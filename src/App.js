import logo from './logo.svg';
import './App.css';
import Shakila from './Shakila';
import Dog from './Dog';
import DieRoll from './DieRoll';

//testing out the functionalities of react.
function App() {
  return (
    <div className="App">
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

