import React , {Component} from 'react';
import './MainMenu.css';
import PlayerPicker from '../PlayerPicker/PlayerPicker.jsx';

class MainMenu extends Component {
  render() {
    return (
      <div className="MainMenu">
        <div className="MainMenuBg">
          <PlayerPicker onPick={this.props.onPick} chosen={this.props.chosen}/>
          <div className="start" onClick={this.props.onStart}><span>Start Game</span></div>
          <div className="bestScore"><span>Best Score</span></div>
          <div className="options"><span>Options</span></div>
          <div className="about" onClick={this.props.onAbout}><span>About</span></div>
        </div>
      </div>
    )
  }
  }


export default MainMenu;
