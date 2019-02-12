import React, { Component } from 'react';
import AutoComplete from 'react-autocomplete';

export class SideMenu extends Component {
    constructor (props) {
        super(props)
        this.state = {
          value: '',
        }
      }

    render() {
        return (
        <div style={sideMenuContainerStyle}>
            <AutoComplete 
                items={[
                    {lat: -18.2449266, lng: -43.6002839, name: 'Casa de Juscelino'},
                    {lat: -18.2466894, lng: -43.5967809, name: 'Casa de chica da silva'},
                    {lat: -18.2438669, lng: -43.5982078, name: 'Estátua de Juscelino'}
                ]}
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
