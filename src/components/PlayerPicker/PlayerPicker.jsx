import React , {Component} from 'react';
import './PlayerPicker.css';

import rick from '../../images/rickSelected.png';
import morty from '../../images/mortySelected.png';
import rickUnchosen from '../../images/rick.png';
import mortyUnchosen from '../../images/morty.png';

class PlayerPicker extends Component {
  picker = event => {
    console.log('lol');
  };

  render(){
    return(
      <p onClick={this.picker} >lol</p>
    )
  }
};

export default PlayerPicker;
