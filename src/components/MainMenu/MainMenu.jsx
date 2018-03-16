import React , {Component} from 'react';
import './MainMenu.css';

class MainMenu extends Component {
  render() {
    return (
      <div className="startMenu">
        <div className="startMenuBg">
          <div className="start"><span>Start Game</span></div>
          <div className="bestScore"><span>Best Score</span></div>
          <div className="options"><span>Options</span></div>
          <div className="about"><span>About</span></div>
        </div>
      </div>
    )
  }
  }


export default MainMenu;
