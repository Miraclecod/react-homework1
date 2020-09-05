import React from 'react';

import logo from './logo.svg';
import './App.css';
import './functionalSolution/StateFunctionalComponent';
import StateFunctionalComponent from './functionalSolution/StateFunctionalComponent';
import { StateClassComponent } from './ClassSolution/StateClassComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StateFunctionalComponent /><br /><br />
        <StateClassComponent />
      </header>
    </div>
  );
}

export default App;
