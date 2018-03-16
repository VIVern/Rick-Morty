import React, { Component } from 'react';
import  './App.css';
import png from './images/bodyFon.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <img src={png} alt=""/>
      </div>
    );
  }
}

export default App;
