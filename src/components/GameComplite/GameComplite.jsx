import React, {Component} from 'react';
import './GameComplite.css';

class GameComplite extends Component {
  render(){
      return(
        <div id="gameComplite">
          <div className="win"><span>Congratulations <br/> You have complite the Game</span></div>
          <div className="resultScore">Score: <span>0</span></div>
          <div className="exit"><span onClick={this.props.onExit}>Back to Menu</span></div>
        </div>
      )
  }
}

export default GameComplite;
