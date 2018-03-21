import React, {Component} from 'react';
import './Game.css';
import PauseMenu from '../PauseMenu/PauseMenu.jsx';
import GameOver from '../GameOver/GameOver.jsx';
import NextLevel from '../NextLevel/NextLevel.jsx';
import GameComplite from '../GameComplite/GameComplite.jsx'
import Bar from '../Bar/BAr.jsx';
import Score from '../Score/Score.jsx';
import Lives from '../Lives/Lives.jsx';
import game  from './canvas.js';
import {state}  from './js_modules/util_functions/gameOver.js';
import {level}  from './js_modules/util_functions/nextLevel.js';



class Game extends Component {
  state = {
    gameOver : state.gameOver,
    gameComplite : false,
    level : level.next,
    level1 : true,
    level2 : false,
    level3: false,
    level4: false,
    level5: false,
    score : 0,
  }


  componentDidMount(){
    game(this.props, this.state);
    setInterval(()=>{
      if(state.gameOver==true){
        this.setState({gameOver : state.gameOver});
        clearInterval();
      }
    },30);
    setInterval(()=>{
      if(level.next==true){
        if(this.state.level1){
          this.setState({level : level.next, level1:false, level2: true});
        }
        else if(this.state.level2){
          this.setState({level : level.next, level2:false, level3: true});
        }
        else if(this.state.level3){
          this.setState({level : level.next, level3:false, level4: true});
        }
        else if(this.state.level4){
          this.setState({level : level.next, level4:false, level5: true});
        }
        else if(this.state.level5){
          this.setState({level : level.next, level5:false, level1: true , gameComplite:true});
        }
        clearInterval();
      }
    },31);
  }

  componentDidUpdate(){
    if(this.state.gameOver == false && this.state.level == false){
      game(this.props,this.state);
    }
  }

  restart = event => {
    this.setState({
      gameOver : false,
      level1 : true,
      level2 : false,
      level3: false,
      level4: false,
      level5: false,
      score : 0,
    });
  }

  nextLevel = event => {
    let playerScore = +$('.resultScore span').text();
    this.setState({level:false, score: playerScore});
  }


  render(){
    if(!this.state.gameOver && this.state.level !=true){
      return(
        <div id="app">
          <canvas id="game"></canvas>
          <Score />
          <Bar />
          <Lives />
          <PauseMenu onExit={this.props.onExit} onRestart={this.restart} chosen={this.props.chosen} level={this.state} />
        </div>
      )
    }

    if(this.state.gameComplite){
      return (
        <div id="app">
          <canvas id="game"></canvas>
          <GameComplite onExit={this.props.onExit} />
        </div>
      )
    }

    if(this.state.level && !this.state.gameComplite){
      return (
        <div id="app">
          <canvas id="game"></canvas>
          <NextLevel onExit={this.props.onExit} onNext={this.nextLevel}/>
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
