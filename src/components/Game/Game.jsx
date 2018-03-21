import React, {Component} from 'react';
import './Game.css';
import PauseMenu from '../PauseMenu/PauseMenu.jsx';
import GameOver from '../GameOver/GameOver.jsx';
import Bar from '../Bar/BAr.jsx';
import Score from '../Score/Score.jsx';
import Lives from '../Lives/Lives.jsx';
import game  from './canvas.js';
import {state}  from './js_modules/util_functions/gameOver.js';



class Game extends Component {
  state = {
    gameOver : state.gameOver,
  }


  componentDidMount(){
    game(this.props);
    setInterval(()=>{
      if(state.gameOver==true){
        this.setState({gameOver : state.gameOver});
        clearInterval();
      }
    },30);
  }

  componentDidUpdate(){
    if(this.state.gameOver == false){
      game(this.props);
    }
  }

  restart = event => {
    this.setState({gameOver:false});
  }


  render(){
    if(!this.state.gameOver){
      return(
        <div id="app">
          <canvas id="game"></canvas>
          <Score />
          <Bar />
          <Lives onGameOver={this.gameOver} />
          <PauseMenu onExit={this.props.onExit} chosen={this.props.chosen} />
        </div>
      )
    }
    return(
      <div id="app">
        <canvas id="game"></canvas>
        <GameOver onExit={this.props.onExit} onRestart={this.restart}/>
      </div>
    )
  }
}


export default Game;
