import logo from './logo.svg';
import './App.css';

function Shakila() {
  return (
    <div className='App'>

      <h1>HAHAHAH</h1>

    </div>
  );
}


function Dog() {
  return (
    <div className='App'>
      <h2>What the dog doing here?</h2>
    </div>
  )
}

//testing out the functionalities of react.
function App() {
  return (
    <div className="App">
      <Shakila />
      <Dog />
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

