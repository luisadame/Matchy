import React, { Component } from 'react';
import Board from './Board/Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board size="4x4" />
      </div>
    );
  }
}

export default App;
