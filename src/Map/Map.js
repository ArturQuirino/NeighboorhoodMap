import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import * as Constants from '../Shared/Constants';
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: -18.2404174,
      lng: -43.6059877
    },
    zoom: 14.78
  };
 
  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: Constants.api_google_maps}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;