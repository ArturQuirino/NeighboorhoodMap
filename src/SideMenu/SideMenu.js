import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { List, ListItem, ListItemText } from '@material-ui/core';

class SideMenu extends Component {
  static props = {
    myLocations: PropTypes.array,
    filterLocations: PropTypes.func,
  };

  state = {
    value: '',
  };

  static defaultProps = {
    myLocations: [],
  };

  sideMenuContainerStyle = {
    display: 'flex',
    padding: '20px',
    flexWrap: 'wrap',
  };

  autoCompleteStyle = {
    margin: '0 0 30% 0',
    width: '50%',
  };

  handleListItemClick = (name) => {
    this.props.filterLocations(name);
  };

  render() {
    return (
      <div style={this.sideMenuContainerStyle}>
        <div style={this.autoCompleteStyle}>
          <input id="autocompleteinput" />
        </div>

        <List>
          {this.props.myLocations.map(loc => (
            <ListItem
              button
              key={loc.id}
              onClick={() => this.handleListItemClick(loc.name)}
            >
              <ListItemText primary={loc.name} />
            </ListItem>
          ))}
          <ListItem
            button
            key="-1"
            onClick={() => this.handleListItemClick('')}
          >
            <ListItemText primary="All Places" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default SideMenu;
