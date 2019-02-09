import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import GoogleMapReact from 'google-map-react';

import * as Constants from '../Shared/Constants';
import Marker from './Marker';
 
class Map extends Component {
    static props = {
        popularLocations: PropTypes.array
    }
    static defaultProps = {
        center: {
        lat: -18.2404174,
        lng: -43.6059877
        },
        zoom: 14.78,
        popularLocations: [
            {lat: -18.2449266, lng: -43.6002839, name: 'Casa de Juscelino'},
            {lat: -18.2466894, lng: -43.5967809, name: 'Casa de chica da silva'}
        ]
    };
    
    render() {
        return (
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: Constants.api_google_maps}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            >
            {this.props.popularLocations.map(location => (
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