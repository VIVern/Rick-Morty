import React, {Component} from 'react';
import './PauseMenu.css';
import game  from '../Game/canvas.js';

class PauseMenu extends Component{

  state = {
    pause : false,
  }

  componentDidMount(){
    window.addEventListener('keydown', (event)=>{
      if(event.keyCode == 27) {
        this.setState({pause : true})
      }
    });
  }


  unPause = event => {
    this.setState({pause:false});
  }

  restart = event => {
    this.setState({pause:false});
    this.props.onRestart();
  }

  render(){
    if(this.state.pause){
      return(
        <div id="pauseMenu">
          <div className="continue"><span onClick={this.unPause}>Continue</span></div>
          <div className="restart" ><span onClick={this.restart}>Restart</span></div>
          <div className="exit"><span onClick={this.props.onExit}>Exit</span></div>
        </div>
      )
    }
    return(
      <div>
      </div>
    )
  }
}


export default PauseMenu;
