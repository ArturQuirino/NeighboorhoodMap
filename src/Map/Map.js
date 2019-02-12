import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import GoogleMapReact from 'google-map-react';

import * as Constants from '../Shared/Constants';
import Marker from './Marker';
 
class Map extends Component {
    static props = {
        myLocations: PropTypes.array
    }
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
            {this.props.myLocations.map(location => (
                <Marker 
                    lat={location.lat}
                    lng={location.lng}
                    text={location.name}>
                </Marker>
            ))}
            </GoogleMapReact>
        </div>
        );
    }
}
 
export default Map;