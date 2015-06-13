'use strict';

import React from 'react';
import { Link } from 'react-router';
import AuthManager from '../security/AuthManager';
import { Navbar, Nav, NavItem, DropdownButton, MenuItem } from 'react-bootstrap';

var navbarRightStyle = {
    paddingTop: '15px'
};

class ApplicationHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        var UserInfo, Pages;
        if (AuthManager.isAuthenticated()) {
            Pages = <Nav>
                <li><Link to="home">Home</Link></li>
                <DropdownButton title='User Admin'>
                    <li><Link to="users">Users</Link></li>
                    <li><Link to="security">Roles &amp; Permissions</Link></li>
                    <li><Link to="alerts">Alerts</Link></li>
                </DropdownButton>
                <DropdownButton title='Product Data'>
                    <li><Link to="products">Products</Link></li>
                    <li><Link to="categories">Categories</Link></li>
                    <li><Link to="brands">Brands</Link></li>
                    <li><Link to="manufacturers">Manufacturers</Link></li>
                    <li><Link to="productlines">Product Lines</Link></li>
                    <li><Link to="skugroups">Sku Groups</Link></li>
                </DropdownButton>
                <DropdownButton title='Orders, Shipping & System'>
                    <li><Link to="orders">Orders</Link></li>
                    <li><Link to="shippers">Shippers</Link></li>
                    <li><Link to="controlvalues">System Configuration</Link></li>
                </DropdownButton>
                <DropdownButton title='Promotions'>
                    <li><Link to="promotions">Promotions</Link></li>
                    <li><Link to="giftcards">Gift Cards</Link></li>
                </DropdownButton>
            </Nav>;
            UserInfo = <ul className="nav navbar-nav navbar-right">
                        <li style={navbarRightStyle}>Hello {AuthManager.getUserId()}!</li>
                        <li><Link to="logout">Log off</Link></li>
                       </ul>
        } else {
            UserInfo = <ul className="nav navbar-nav navbar-right">
                        <li><Link to="login">Login</Link></li>
                        <li><Link to="register">Register</Link></li>
                       </ul>;
            Pages = <Nav></Nav>;
        }
        return (
            <div className="application-header">
                <Navbar brand='Ecommerce Web Admin'>
                    {Pages}
                    {UserInfo}
                </Navbar>
            </div>
        );
    }

}

module.exports = ApplicationHeader;