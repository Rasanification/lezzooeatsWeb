import React, { Component } from 'react';
import { Button, Input, Menu, Accordion, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Categories from './Categories';

class CustomNavbar extends Component {
    render() {
        return (
          <Menu secondary>
          <Menu.Item name='Home' href='../merchants'/>
          <Menu.Item>
            <Button onClick={()=>{this.props.isShown=true;}} ref=""> Categories </Button>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
              name='logout'
            />
          </Menu.Menu>
        </Menu>
        );
    }
}

export default CustomNavbar;
