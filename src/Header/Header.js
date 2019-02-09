import React, { Component } from 'react';

class Header extends Component {
    render () {
        return (
            <div style={headerStyle}>
                <h1>My Neighborhood</h1>
            </div>
        )
    }
}

const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

}

export default Header;