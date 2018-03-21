import React, {Component} from 'react';
import './NextLevel.css';

class NextLevel extends Component {
  render(){
      return(
        <div id="nextLevel">
          <div className="lost"><span>Congratulations</span></div>
          <div className="resultScore">Score: <span>0</span></div>
          <div className="restart"><span onClick={this.props.onNext}>Next Level</span></div>
          <div className="exit"><span onClick={this.props.onExit}>Exit</span></div>
        </div>
      )
  }
}

export default NextLevel;
