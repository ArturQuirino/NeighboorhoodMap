import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import GoogleMapReact from 'google-map-react';

import * as Constants from '../Shared/Constants';
import Marker from './Marker';


class Map extends Component {
  static map;

  static infoWindow;

  componentDidMount() {
    const { google } = window;
    if (!google) {
      setTimeout(() => {
        this.setMap();
      }, 3000);
    } else {
      this.setMap();
    }
  }

  setMap() {
    const { google } = window;
    const { zoom, center, myLocations } = this.props;
    this.map = new google.maps.Map(
      document.getElementById('map'), { zoom, center },
    );
    this.infoWindow = new google.maps.InfoWindow();
    myLocations.forEach((location) => {
      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: location.name,
      });
      const self = this;
      marker.addListener('click', function addClickListenerToMarker() {
        self.populateInfoWindow(this);
      });
    });
  }

  populateInfoWindow(marker) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (this.infoWindow.marker !== marker) {
      // Clear the infowindow content to give the streetview time to load.
      this.infoWindow.setContent(`<div> ${marker.title} </div><div id="pano"></div>`);
      this.infoWindow.marker = marker;
      // Make sure the marker property is cleared if the infowindow is closed.
      this.infoWindow.addListener('closeclick', () => {
        this.infoWindow.marker = null;
      });
      // Open the infowindow on the correct marker.
      this.infoWindow.open(this.map, marker);
    }
  }

  render() {
    return (
      <div id="map" style={{ height: '100%', width: '100%' }} />
    );
  }
}

Map.propTypes = {
  myLocations: PropTypes.array,
  center: PropTypes.object,
  zoom: PropTypes.number,
};

Map.defaultProps = {
  center: {
    lat: -18.2404174,
    lng: -43.6059877,
  },
  zoom: 14.78,
  myLocations: [],
};

export default Map;
