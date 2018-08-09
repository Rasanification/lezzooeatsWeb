import React, { Component } from 'react';
import { Input, Menu, Accordion, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class CustomNavbar extends Component {
    render() {
        return (
          <Menu secondary>
          <Menu.Item name='Merchants' href='../Merchants'/>
          <Menu.Item name='MerchantMenus' href='../MerchantMenus'/>
          <Menu.Item name='Home' href='../merchants'/>
      





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
