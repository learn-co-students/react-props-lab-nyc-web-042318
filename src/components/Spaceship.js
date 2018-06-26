// Code The Spaceship Component Here
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Spaceship extends Component {
  render () {
    return (
      <div>
        <h1>Spaceship Name: {this.props.name}</h1>
        <h2>Speed: {this.props.speed}</h2>
        <h2>Rockets? {this.props.hasRockets}</h2>
        <h2>Colors: {this.props.colors}</h2>
      </div>
    )
  }
}

Spaceship.propTypes = {
  name: PropTypes.string,
  speed: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  hasRockets: PropTypes.bool,
  colors: PropTypes.arrayOf(PropTypes.string)
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
