import React, { Component } from 'react';

import Header from './Header/Header';
import SideMenu from './SideMenu/SideMenu';
import Map from './Map/Map';

class App extends Component {
    myLocations = [
        {lat: -18.2449266, lng: -43.6002839, name: 'Casa de Juscelino'},
        {lat: -18.2466894, lng: -43.5967809, name: 'Casa de chica da silva'},
        {lat: -18.2438669, lng: -43.5982078, name: 'Estátua de Juscelino'}
    ]

    render() {
        return (
        <div style={appStyle}>
            <div style={headerStyle}>
                <Header/>
            </div>
            
            <div style={sideMenuStyle}>
                <SideMenu myLocations={this.myLocations}/>
            </div>
            
            <div style={mapStyle}>
                <Map myLocations={this.myLocations}/>
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
