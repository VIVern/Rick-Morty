import React , {Component} from 'react';
import './MainMenu.css';
import PlayerPicker from '../PlayerPicker/PlayerPicker.jsx';

class MainMenu extends Component {
  state = {
    chosen : true,
  }

  pick = event => {
    event.preventDefault();
    this.setState({chosen : !this.state.chosen})
  };

  render() {
    return (
      <div className="MainMenu">
        <div className="MainMenuBg">
          <PlayerPicker onPick={this.pick} chosen={this.state.chosen}/>
          <div className="start"><span>Start Game</span></div>
          <div className="bestScore"><span>Best Score</span></div>
          <div className="options"><span>Options</span></div>
          <div className="about" onClick={this.props.onClick}><span>About</span></div>
        </div>
      </div>
    )
  }
  }


export default MainMenu;
