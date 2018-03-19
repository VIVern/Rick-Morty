import React , {Component} from 'react';
import './Lives.css';

class Lives extends Component {

  componentDidUpdate(){
    console.log('minus');
    this.props.onGameOver();
  }
  render(){
    return(
      <ul id="lives">
        <li data-live="true" className="hasLive"></li>
        <li data-live="true" className="hasLive"></li>
        <li data-live="true" className="hasLive"></li>
        <li data-live="true" className="hasLive"></li>
        <li data-live="true" className="hasLive"></li>
      </ul>
    )
  }
}

export default Lives;
