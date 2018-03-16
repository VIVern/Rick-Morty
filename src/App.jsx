import React, { Component } from 'react';
import MainMenu from './components/MainMenu/MainMenu.jsx'
import  './App.css';

class App extends Component {
  render() {
    return (
        <div id="app">
          <MainMenu/>
        </div>
    );
  }
}

export default App;
