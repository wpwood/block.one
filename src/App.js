import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import BlockContainer from './BlockContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <BlockContainer />
      </div>
    );
  }
}

export default App;
