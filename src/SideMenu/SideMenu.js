import React, { Component } from 'react'

export class SideMenu extends Component {
  render() {
    return (
      <div style={sideMenuContainerStyle}>
            <label>Search</label>
            <input placeholder="Restaurants"></input>
      </div>
    )
  }
}

const sideMenuContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight:  '100%'
};

export default SideMenu;
