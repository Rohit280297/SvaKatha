import React from 'react';
import './Navbar.css';


import {NavLink} from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return(
            <div className="container">
                <ul className="List">
                    <NavLink exact id="ListStyle" activeClassName="LinkStyle" to="/"><li id="NavbarItem">SVA</li></NavLink>
                    <NavLink exact id="ListStyle" activeClassName="LinkStyle" to="/about"><li id="NavbarItem">About</li></NavLink>
                    <NavLink exact id="ListStyle" activeClassName="LinkStyle" to="/community"><li id="NavbarItem"> Join Community</li></NavLink>
                    <NavLink exact id="ListStyle" activeClassName="LinkStyle" to="/profile"><li id="NavbarItem">Profile</li></NavLink>
                    <NavLink exact id="ListStyle" activeClassName="LinkStyle" to="/contactUs"><li id="NavbarItem">Contact Us</li></NavLink>
                </ul>
            </div>
        )
    }
}

export default Navbar;