import React , {Component} from 'react';
import './PlayerPicker.css';

import rick from '../../images/rickSelected.png';
import morty from '../../images/mortySelected.png';
import rickUnchosen from '../../images/rick.png';
import mortyUnchosen from '../../images/morty.png';

class PlayerPicker extends Component {
  render(){
    if(this.props.chosen == "rick"){
      return (
        <div>
          <img src={rick} data-rick className="player rick check"/>
          <span className="rickSelected">Chosen</span>
          <img src={mortyUnchosen} onClick={this.props.onPick} data-morty className="player morty"/>
        </div>
      )
    } else if(this.props.chosen == "morty") {
      return (
        <div>
          <img src={rickUnchosen} alt="" onClick={this.props.onPick} data-rick className="player rick check"/>
          <img src={morty} alt="" data-morty className="player morty"/>
          <span className="mortySelected">Chosen</span>
        </div>
      )
    }
  }


};

export default PlayerPicker;
