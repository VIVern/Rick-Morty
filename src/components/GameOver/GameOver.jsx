import React, {Component} from 'react';
import './GameOver.css';

class GameOver extends Component {

  render(){
    if(this.props.gameOver){
      return(
        <h1>lol</h1>
      )
    }
    return(
      <div></div>
    )
  }
}

export default GameOver;
