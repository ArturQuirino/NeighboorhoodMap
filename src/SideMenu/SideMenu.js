import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { List, ListItem, ListItemText } from '@material-ui/core';
import AutoComplete from 'react-autocomplete';

class SideMenu extends Component {
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
    justifyContent: 'space-around',
  };

  autoCompleteStyle = {
    margin: '0 0 30% 0',
    width: '50%',
  };

  handleListItemClick = (name) => {
    const { filterLocations } = this.props;
    filterLocations(name);
  };

  render() {
    const { myLocations, filterLocations } = this.props;
    const { value } = this.state;
    return (
      <div style={this.sideMenuContainerStyle}>
        <div style={this.autoCompleteStyle}>
          <label htmlFor="autoComplete">Search Box</label>
          <AutoComplete
            items={myLocations}
            shouldItemRender={
              (item, valueItem) => item.name.toLowerCase().indexOf(valueItem.toLowerCase()) > -1
            }
            getItemValue={item => item.name}
            renderItem={(item, highlighted) => (
              <div
                key={item.name}
                style={{
                  backgroundColor: highlighted ? '#eee' : 'transparent',
                }}
              >
                {item.name}
              </div>
            )}
            value={value}
            onChange={(e) => {
              this.setState({ value: e.target.value });
              filterLocations(e.target.value);
            }}
            onSelect={(valueSelected) => {
              filterLocations(valueSelected);
              this.setState({ value: valueSelected });
            }}
            id="autoComplete"
          />
        </div>

        <List>
          {myLocations.map(loc => (
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

SideMenu.propTypes = {
  myLocations: PropTypes.array,
  filterLocations: PropTypes.func.isRequired,
};

export default SideMenu;
