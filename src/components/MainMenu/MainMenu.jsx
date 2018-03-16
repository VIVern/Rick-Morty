import React , {Component} from 'react';
import './MainMenu.css';
import PlayerPicker from '../PlayerPicker/PlayerPicker.jsx';

class MainMenu extends Component {

  picker = (x,y) => {
    return x+y;
  }

  render() {
    return (
      <div className="MainMenu">
        <div className="MainMenuBg">
          <PlayerPicker/>
          <div className="start"><span>{this.picker(1,3)}</span></div>
          <div className="bestScore"><span>Best Score</span></div>
          <div className="options"><span>Options</span></div>
          <div className="about"><span>About</span></div>
        </div>
      </div>
    )
  }
  }


export default MainMenu;
