import React, {Component} from 'react';
import './Game.css';
import PauseMenu from '../PauseMenu/PauseMenu.jsx';
import game  from './canvas.js';



class Game extends Component {

  componentDidMount(){

    game(this.props);

  }

  render(){
    return(
      <div id="app">
        <canvas id="game"></canvas>
        <PauseMenu onExit={this.props.onExit} chosen={this.props.chosen} />
      </div>
    )
  }
}

export default Game;
