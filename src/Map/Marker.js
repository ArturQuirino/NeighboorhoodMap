import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Marker extends Component {
  static props = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    onClick: null,
  };

  render() {
    const { text, onClick } = this.props;

    const markerStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '18px',
      height: '18px',
      backgroundColor: '#e2d222',
      border: '2px solid #2b2804',
      borderRadius: '75%',
      userSelect: 'none',
      transform: 'translate(-50%, -50%)',
      cursor: onClick ? 'pointer' : 'default',
    };

    return (
      <div
        alt={text}
        style={markerStyle}
        {...(onClick ? { onClick } : {})}
        
      />
    );
  }
}

export default Marker;
