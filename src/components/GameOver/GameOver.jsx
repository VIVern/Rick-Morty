import React, {Component} from 'react';
import './GameOver.css';

class GameOver extends Component {
  render(){
      return(
        <div id="gameOver">
          <div className="lost"><span>Game Over</span></div>
          <div className="resultScore">Score: <span>0</span></div>
          <div className="restart"><span onClick={this.props.onRestart}>Restart</span></div>
          <div className="exit"><span onClick={this.props.onExit}>Exit</span></div>
        </div>
      )
  }
}

export default GameOver;
