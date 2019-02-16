import React, { Component } from "react";
import { PropTypes } from "prop-types";
import AutoComplete from "react-autocomplete";
import { List, ListItem, ListItemText } from "@material-ui/core";

export class SideMenu extends Component {
  static props = {
    myLocations: PropTypes.array,
    filterLocations: PropTypes.func
  };

  state = {
    value: ""
  };

  static defaultProps = {
    myLocations: []
  };

  handleListItemClick = (name) => {
    this.props.filterLocations(name)
  }

  render() {
    return (
      <div style={sideMenuContainerStyle}>
        <div style={autoCompleteStyle}>
          <AutoComplete
            items={this.props.myLocations}
            shouldItemRender={(item, value) =>
              item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
            }
            getItemValue={item => item.name}
            renderItem={(item, highlighted) => (
              <div
                key={item.name}
                style={{
                  backgroundColor: highlighted ? "#eee" : "transparent"
                }}
              >
                {item.name}
              </div>
            )}
            value={this.state.value}
            onChange={e => {
              this.setState({ value: e.target.value });
              this.props.filterLocations(e.target.value);
            }}
            onSelect={value => {
              this.props.filterLocations(value);
              this.setState({ value });
            }}
          />
        </div>

        <List>
          {this.props.myLocations.map(loc => (
            <ListItem button key={loc.id} onClick={() => this.handleListItemClick(loc.name)}>
              <ListItemText primary={loc.name} />
            </ListItem>
          ))}
          <ListItem button key='-1' onClick={() => this.handleListItemClick('')}>
            <ListItemText primary='All Places' />
        </ListItem>
        </List>
      </div>
    );
  }
}

const sideMenuContainerStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  padding: "20px"
};

const autoCompleteStyle = {
  margin: "0 0 30% 0"
};

export default SideMenu;
