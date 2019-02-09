import React, { Component } from 'react';

import logo from './logo.svg';
import Header from './Header/Header';
import SideMenu from './SideMenu/SideMenu';
import Map from './Map/Map';

class App extends Component {
  render() {
    return (
      <div style={appStyle}>
        <div style={headerStyle}>
            <Header/>
        </div>
        
        <div style={sideMenuStyle}>
            <SideMenu/>
        </div>
        
        <div style={mapStyle}>
            <Map/>
        </div>
      </div>
    );
  }
}

const appStyle = {
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '25% 75%',
    gridTemplateRows:  '15% 85%'
}

const headerStyle = {
    gridColumnStart: 1,
    gridColumnEnd: 3,
    gridRowStart: 1,
    gridRowEnd: 2,
}

const sideMenuStyle = {
    gridColumnStart: 1,
    gridColumnEnd: 2,
    gridRowStart: 2,
    gridRowEnd: 3,
}

const mapStyle = {
    gridColumnStart: 2,
    gridColumnEnd: 3,
    gridRowStart: 2,
    gridRowEnd: 3,
}

export default App;
