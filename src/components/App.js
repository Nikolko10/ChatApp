import React, { Component } from 'react';
import './../App.css';
import Name from './Name.js';
import Main from './Main.js';

export default class App extends Component {
  render() {
    return <div className="App">
        <Name />
        <Main />
      </div>
  }
}