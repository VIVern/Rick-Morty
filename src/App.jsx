import React, { Component } from 'react';
import MainMenu from './components/MainMenu/MainMenu.jsx';
import About from './components/About/About.jsx';
import  './App.css';


class App extends Component {
  state = {
    menu : true,
    about : false,
    start : false
  }

  about = event => {
    event.preventDefault();
    this.setState({menu: !this.state.menu, about: !this.state.about});
  }

  goBack = event => {
    event.preventDefault();
    this.setState({menu: true, about: false});
  }

  render() {
    if(this.state.menu){
      return (
          <div id="app">
             <MainMenu onClick={this.about}/>
          </div>
      );
    }
    if(this.state.about) {
      return (
          <div id="app">
             <About onClick={this.goBack}/>
          </div>
      );
    }
  }
}

export default App;
