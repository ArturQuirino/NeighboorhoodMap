import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import GoogleMapReact from 'google-map-react';

import * as Constants from '../Shared/Constants';
import Marker from './Marker';


class Map extends Component {
  static map;

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
    myLocations.forEach((location) => {
      const marker = new google.maps.Marker({ position: location, map: this.map });
    });

  }

  render() {
    return (
      <div id="map" style={{ height: '100%', width: '100%' }}>
        {/* <GoogleMapReact
          bootstrapURLKeys={{ key: Constants.api_google_maps }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.myLocations.map(location => (
            <Marker
              lat={location.lat}
              lng={location.lng}
              text={location.name}
              key={location.id}
            />
          ))}
        </GoogleMapReact> */}
      </div>
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
