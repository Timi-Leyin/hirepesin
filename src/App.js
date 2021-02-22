import React from 'react';
import logo from './logo.svg';
import Logo from './component/Logo/Logo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  width='400' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React <span className='fa fa-share-alt'></span>
        </a>
      </header>
    </div>
  );
}

export default App;
