import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class CustomNavbar extends Component {
    render() {
        return (
          <Menu secondary>
          <Menu.Item name='Home' href='/merchants/merchants'/>
          <Menu.Item
            name='Account'
            href='/account/account'
          />
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
