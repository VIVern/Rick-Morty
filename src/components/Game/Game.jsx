import React, {Component} from 'react';
import './Game.css';
import game  from './canvas.js';



class Game extends Component {

  componentDidMount(){
    game(this.props);
    this.props.pause();
  }

  render(){
    return(
      <canvas id="game"></canvas>
    )
  }

}

export default Game;
