import React, {Component} from 'react';

import './About.css';

class About extends Component {

  render(){
    return (
      <div id="about">
        <h1>About developers</h1>
        <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta voluptate deleniti a laboriosam est, eveniet quod incidunt non fugit voluptas numquam ipsa maiores architecto inventore, excepturi itaque minus saepe odit.</span>
        <span>Praesentium consequuntur, dolorem autem iusto nostrum, consectetur doloremque, in perferendis vitae fugit excepturi at quia nobis. Dicta, eligendi libero cupiditate ipsa nam vitae voluptas, provident explicabo sequi, iste maxime sapiente!</span></p>
        <div className="goBack" onClick={this.props.onGoBack}>Back to Menu</div>
      </div>
    )
  }
}

export default About;
