import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// removed <img src={logo} className="App-logo" alt="logo" /> from line 10

const Test = () => <div>Testing</div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>
        <p className="App-intro">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul className="tyler">
          <li>Test 1</li>
          <li>Test 2</li>
          <li>Test 3</li>
        </ul>
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
