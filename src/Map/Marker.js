import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Marker extends Component {
    static props = {
        onClick: PropTypes.func,
        text: PropTypes.string.isRequired
    }

    static defaultProps = {
        onClic: null
    }

    markerStyle = {
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
        cursor: this.props.onClick ? 'pointer' : 'default'
    }

    render() {
        return (
        <div
            alt={this.props.text}
            style={this.markerStyle}
            {...this.props.onClick ? {onClick: this.props.onClick} : {}}
        />
        )
    }
}



export default Marker;
