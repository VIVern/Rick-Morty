import React, { Component } from 'react';
import MainMenu from './components/MainMenu/MainMenu.jsx';
import About from './components/About/About.jsx';
import Game from './components/Game/Game.jsx';
import  './App.css';


class App extends Component {
  state = {
    menu : true,
    about : false,
    start : false
  }

  about = event => {
    event.preventDefault();
    this.setState({menu: false, about: true});
  }

  start = event => {
    event.preventDefault();
    this.setState({menu: false, start: true});
  }

  goBack = event => {
    event.preventDefault();
    this.setState({menu: true, about: false});
  }

  render() {
    if(this.state.menu){
      return (
        <div id="app">
          <MainMenu onAbout={this.about} onStart={this.start}/>
        </div>
      );
    }
    if(this.state.about) {
      return (
        <div id="app">
          <About onGoBack={this.goBack}/>
        </div>
      );
    }
    if(this.state.start) {
      return (
        <div id="app">
          <Game />
        </div>
      );
    }
  }
}

export default App;
