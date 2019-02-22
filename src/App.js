import React, { Component } from 'react';

import Header from './Header/Header';
import SideMenu from './SideMenu/SideMenu';
import Map from './Map/Map';

const locations = [
  {
    lat: -19.851682,
    lng: -43.977247,
    name: 'Lagoa da Pampulha',
    id: 1,
    wikiTitle: 'Lake_Pampulha',
  },
  {
    lat: -19.9319811,
    lng: -43.9380019,
    name: 'Praça da liberdade',
    id: 2,
    wikiTitle: 'Lake_Pampulha',
  },
  {
    lat: -19.865867,
    lng: -43.9711315,
    name: 'Mineirão',
    id: 3,
    wikiTitle: 'Mineirão',
  },
  {
    lat: -19.8690878,
    lng: -43.9663841,
    name: 'Federal University of Minas Gerais',
    id: 4,
    wikiTitle: 'Federal_University_of_Minas_Gerais',
  },
  {
    lat: -19.8583967,
    lng: -43.9790021,
    name: 'Church of Saint Francis of Assisi',
    id: 5,
    wikiTitle: 'Church_of_Saint_Francis_of_Assisi',
  },
];

class App extends Component {
  state = {
    allMyLocations: locations,
    filteredLocations: locations,
  };

  appStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  headerStyle = {
    height: '15%',
    textAlign: 'center',
  };

  mainStyle = {
    height: '85vh',
  }

  mapStyle = {
    width: '100%',
    minHeight: '300px',
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
