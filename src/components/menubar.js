import React, {useState} from 'react';
import { Menu } from "semantic-ui-react";
import Logo from './../images/rosyhand-logo.png';
import { Link } from "react-router-dom";


const Menubar = props => {
    const pathname = window.location.pathname;
    const path = pathname === '/' ? 'home' : pathname.substr(1);
    const handleItemClick = (e, { name }) => setActiveItem(name);
    const [activeItem, setActiveItem] = useState(path);
    return (
        <Menu pointing secondary color="light">
        <Menu.Item>
          <img src={Logo} />
        </Menu.Item>

        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
          as={Link}
          to="/"
        >
          About Us
        </Menu.Item>
        <Menu.Item
          name='products'
          active={activeItem === 'products'}
          onClick={handleItemClick}
          as={Link}
          to="/products"
        >
          Products
        </Menu.Item>
        <Menu.Item
          name='custom'
          active={activeItem === 'custom'}
          onClick={handleItemClick}
          as={Link}
          to="/custom"
        >
          Custom
        </Menu.Item>
        <Menu.Menu position="right">
        <Menu.Item
          name='register'
          active={activeItem === 'register'}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        >
            Register
        </Menu.Item>
        <Menu.Item
          name='signin'
          active={activeItem === 'signin'}
          onClick={handleItemClick}
          as={Link}
          to="/signin"
        >
          Sign-in
        </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
};

export default Menubar;