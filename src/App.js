import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// removed <img src={logo} className="App-logo" alt="logo" /> from line 10

const Test = () => <div>Testing</div>

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Test />
    </div>
  );
}

export default App;
