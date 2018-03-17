import React , {Component} from 'react';
import './PlayerPicker.css';

import rick from '../../images/rickSelected.png';
import morty from '../../images/mortySelected.png';
import rickUnchosen from '../../images/rick.png';
import mortyUnchosen from '../../images/morty.png';

class PlayerPicker extends Component {
    state = {
      chosen : true,
    }

  pick = event => {
    event.preventDefault();
    this.setState({chosen : !this.state.chosen})
  };

  render(){
    if(this.state.chosen == true){
      return (
        <div onClick={this.pick}>
          <img src={rick} data-rick className="player rick check"/>
          <span className="rickSelected">Chosen</span>
          <img src={mortyUnchosen} data-morty className="player morty"/>
        </div>
      )
    } else {
      return (
        <div>
          <img src={rickUnchosen} alt="" onClick={this.pick} data-rick className="player rick check"/>
          <img src={morty} alt="" data-morty className="player morty"/>
          <span className="mortySelected">Chosen</span>
        </div>
      )
    }
  }


};

export default PlayerPicker;
