import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  state = { activeItem: 'home' };

  handleMenuItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          as={NavLink}
          to='/dashboard'
          name='dashboard'
          active={activeItem === 'dashboard'}
          onClick={this.handleMenuItemClick}
        >
          <Icon name='table' />
          Dashboard
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;
