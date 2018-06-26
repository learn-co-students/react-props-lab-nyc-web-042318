// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    console.log(this.defaultProps);
    return (
      <div>
        <h1>Spaceship Name: {this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets: {this.props.rockets}</p>
        <p>Colors: {this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
};


export default Spaceship;
