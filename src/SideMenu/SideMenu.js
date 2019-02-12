import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import AutoComplete from 'react-autocomplete';

export class SideMenu extends Component {


    static props = {
        myLocations: PropTypes.array
    }

    state = {
        value: '',
    }

    static defaultProps = {
        myLocations: []
    };

    render() {
        return (
        <div style={sideMenuContainerStyle}>
            <AutoComplete 
                items={this.props.myLocations}
                shouldItemRender={(item,value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={item => item.name}
                renderItem={(item, highlighted) => 
                    <div
                    key={item.name}
                    style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                >
                    {item.name}
                </div>
                }
                value={this.state.value}
                onChange={e => this.setState({ value: e.target.value })}
                onSelect={value => this.setState({ value })}
            />
        </div>
        )
    }
}

const sideMenuContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight:  '100%',
    padding: '20px'
};

export default SideMenu;
