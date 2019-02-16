import React, { Component } from 'react';

import Header from './Header/Header';
import SideMenu from './SideMenu/SideMenu';
import Map from './Map/Map';

class App extends Component {
  state = {
    allMyLocations: [
      {
        lat: -18.2449266,
        lng: -43.6002839,
        name: 'Casa de Juscelino',
        id: 1,
      },
      {
        lat: -18.2466894,
        lng: -43.5967809,
        name: 'Casa de chica da silva',
        id: 2,
      },
      {
        lat: -18.2438669,
        lng: -43.5982078,
        name: 'Estátua de Juscelino',
        id: 3,
      },
    ],
    filteredLocations: [
      {
        lat: -18.2449266,
        lng: -43.6002839,
        name: 'Casa de Juscelino',
        id: 1,
      },
      {
        lat: -18.2466894,
        lng: -43.5967809,
        name: 'Casa de chica da silva',
        id: 2,
      },
      {
        lat: -18.2438669,
        lng: -43.5982078,
        name: 'Estátua de Juscelino',
        id: 3,
      },
    ],
  };

  appStyle = {
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '25% 75%',
    gridTemplateRows: '15% 85%',
  };

  headerStyle = {
    gridColumnStart: 1,
    gridColumnEnd: 3,
    gridRowStart: 1,
    gridRowEnd: 2,
  };

  sideMenuStyle = {
    gridColumnStart: 1,
    gridColumnEnd: 2,
    gridRowStart: 2,
    gridRowEnd: 3,
  };

  mapStyle = {
    gridColumnStart: 2,
    gridColumnEnd: 3,
    gridRowStart: 2,
    gridRowEnd: 3,
  };

  filterLocations = (searchedLocation) => {
    const { allMyLocations } = this.state;
    const filteredLocations = allMyLocations.filter(
      location => location.name === searchedLocation,
    );
    if (filteredLocations.length === 0) {
      this.setState(state => ({
        filteredLocations: state.allMyLocations,
      }));
    } else {
      this.setState(state => ({
        filteredLocations: state.allMyLocations.filter(
          location => location.name === searchedLocation,
        ),
      }));
    }
  };

  render() {
    const { allMyLocations, filteredLocations } = this.state;
    return (
      <div style={this.appStyle}>
        <div style={this.headerStyle}>
          <Header />
        </div>

        <div style={this.sideMenuStyle}>
          <SideMenu
            myLocations={allMyLocations}
            filterLocations={this.filterLocations}
          />
        </div>

        <div style={this.mapStyle}>
          <Map myLocations={filteredLocations} />
        </div>
      </div>
    );
  }
}

export default App;
