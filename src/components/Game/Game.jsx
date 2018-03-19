import React, {Component} from 'react';
import './Game.css';
import PauseMenu from '../PauseMenu/PauseMenu.jsx';
import GameOver from '../GameOver/GameOver.jsx';
import Bar from '../Bar/BAr.jsx';
import Score from '../Score/Score.jsx';
import Lives from '../Lives/Lives.jsx';
import game  from './canvas.js';



class Game extends Component {
  state = {
    gameOver : false,
  }

  gameOver = event =>{
      let lives = document.querySelectorAll('#lives li[data-live="true"]');
      if(lives.length == 5) this.setState({gameOver:true})
  }

  componentDidMount(){

    game(this.props);

  }

  render(){
    return(
      <div id="app">
        <canvas id="game"></canvas>
        <Score />
        <Bar />
        <Lives onGameOver={this.gameOver} />
        <PauseMenu onExit={this.props.onExit} chosen={this.props.chosen} />
        <GameOver gameOver={this.state.gameOver} />
      </div>
    )
  }
}

export default Game;
