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
        name: 'Lagoa da Pampulha',
        id: 1,
        wikiTitle: 'Lake_Pampulha',
      },
      {
        lat: -18.2466894,
        lng: -43.5967809,
        name: 'Casa de chica da silva',
        id: 2,
        wikiTitle: 'Lake_Pampulha',
      },
      {
        lat: -18.2438669,
        lng: -43.5982078,
        name: 'Estátua de Juscelino',
        id: 3,
        wikiTitle: 'Lake_Pampulha',
      },
    ],
    filteredLocations: [
      {
        lat: -18.2449266,
        lng: -43.6002839,
        name: 'Casa de Juscelino',
        id: 1,
        wikiTitle: 'Lake_Pampulha',
      },
      {
        lat: -18.2466894,
        lng: -43.5967809,
        name: 'Casa de chica da silva',
        id: 2,
        wikiTitle: 'Lake_Pampulha',
      },
      {
        lat: -18.2438669,
        lng: -43.5982078,
        name: 'Estátua de Juscelino',
        id: 3,
        wikiTitle: 'Lake_Pampulha',
      },
    ],
  };

  appStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  headerStyle = {
    height: '15%',
  };

  mainStyle = {
    height: '85vh',
  }

  mapStyle = {
    width: '100%',
    minHeight: '200px',
    height: '50%',
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
    const { filteredLocations } = this.state;
    return (
      <div style={this.appStyle}>
        <header style={this.headerStyle}>
          <Header />
        </header>
        <main style={this.mainStyle}>
          <div style={this.mapStyle}>
            <Map myLocations={filteredLocations} />
          </div>
          <div style={this.sideMenuStyle}>
            <SideMenu
              myLocations={filteredLocations}
              filterLocations={this.filterLocations}
            />
          </div>

          
        </main>

        
      </div>
    );
  }
}

export default App;
