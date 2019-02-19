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
      }, 3000);
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
      this.setSearchBox();
    } else {
      setTimeout(() => {
        this.setMarkers();
        this.setSearchBox();
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
        self.populateInfoWindow(this);
      });
      this.markers.push(marker);
    });
  }

  setSearchBox() {
    const { google } = window;
    const input = document.getElementById('autocompleteinput');
    const searchBox = new google.maps.places.SearchBox(input);
    searchBox.setBounds(this.map.getBounds());
    const self = this;
    searchBox.addListener('places_changed', function addPlacesChangedEvent() {
      self.searchBoxPlaces(this);
    });
  }

  searchBoxPlaces(searchBox) {
    this.hideMarkers();
    const places = searchBox.getPlaces();
    // For each place, get the icon, name and location.
    this.createMarkersForPlaces(places);
    if (places.length === 0) {
      window.alert('We did not find any places matching that search!');
    }
  }

  hideMarkers() {
    for (let i = 0; i < this.markers.length; i += 1) {
      this.markers[i].setMap(null);
    }
    for (let i = 0; i < this.placeMarkers.length; i += 1) {
      this.placeMarkers[i].setMap(null);
    }
  }

  createMarkersForPlaces(places) {
    const { google } = window;
    const bounds = new google.maps.LatLngBounds();
    for (let i = 0; i < places.length; i += 1) {
      const place = places[i];
      const icon = {
        url: place.icon,
        size: new google.maps.Size(35, 35),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(15, 34),
        scaledSize: new google.maps.Size(25, 25),
      };
      // Create a marker for each place.
      const marker = new google.maps.Marker({
        map: this.map,
        icon,
        title: place.name,
        position: place.geometry.location,
        id: place.id,
      });
      // If a marker is clicked, do a place details search on it in the next function.
      // marker.addListener('click', function() {
      //   getPlacesDetails(this, place);
      // });
      this.placeMarkers.push(marker);
      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    }
    this.map.fitBounds(bounds);
  }

  populateInfoWindow(marker) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (this.infoWindow.marker !== marker) {
      // Clear the infowindow content to give the streetview time to load.
      fetch('https://en.wikipedia.org/api/rest_v1/page/html/Lake_Pampulha').then(response => response.text())
        .then((dados) => {
          this.infoWindow.setContent(dados);
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
    lat: -18.2404174,
    lng: -43.6059877,
  },
  zoom: 14.78,
  myLocations: [],
};

export default Map;
