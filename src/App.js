import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bjq from './images/bjq.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={bjq} width="500px" alt="Happy birthday"/>
          <p>
            Happy birthday to Rail_bu!!!
          </p>
        </header>
      </div>
    );
  }
}

export default App;
