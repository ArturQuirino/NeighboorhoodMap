import React, { Component } from 'react';
import { PropTypes } from 'prop-types';


class Map extends Component {
  static map;

  static markers;

  static infoWindow;

  static placeMarkers;

  constructor(props) {
    super(props);
    this.markers = [];
    this.placeMarkers = [];
  }

  componentDidMount() {
    const { google } = window;
    if (!google) {
      setTimeout(() => {
        this.setMap();
      }, 4000);
    } else {
      this.setMap();
    }
  }

  setMap() {
    const { google } = window;
    const { zoom, center } = this.props;
    this.map = new google.maps.Map(
      document.getElementById('map'), { zoom, center },
    );
    this.infoWindow = new google.maps.InfoWindow();
    if (this.map.getBounds()) {
      this.setMarkers();
    } else {
      setTimeout(() => {
        this.setMarkers();
      }, 3000);
    }
  }

  setMarkers() {
    const { google } = window;
    const { myLocations } = this.props;
    this.markers.forEach((mark) => {
      mark.setMap(null);
    });
    this.placeMarkers.forEach((placeMark) => {
      placeMark.setMap(null);
    });
    myLocations.forEach((location) => {
      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: location.name,
      });
      const self = this;
      marker.addListener('click', function addClickListenerToMarker() {
        self.populateInfoWindow(this, location);
      });
      this.markers.push(marker);
    });
  }

  hideMarkers() {
    for (let i = 0; i < this.markers.length; i += 1) {
      this.markers[i].setMap(null);
    }
    for (let i = 0; i < this.placeMarkers.length; i += 1) {
      this.placeMarkers[i].setMap(null);
    }
  }

  populateInfoWindow(marker, location) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (this.infoWindow.marker !== marker) {
      // Open infowindow with information of that place from wikipedia.
      fetch(`https://en.wikipedia.org/api/rest_v1/page/html/${location.wikiTitle}`).then(response => response.text())
        .then((dados) => {
          this.infoWindow.setContent(dados);
        })
        .catch(() => {
          this.infoWindow.setContent('There was an error in your request. Try again later.');
        });

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
    this.setMarkers();
    return (
      <div id="map" style={{ minHeight: '200px', width: '100%', height: '100%' }} />
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
    lat: -19.9166813,
    lng: -43.9344931,
  },
  zoom: 11,
  myLocations: [],
};

export default Map;
