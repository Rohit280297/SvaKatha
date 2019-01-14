import React from 'react';
import {NavLink} from 'react-router-dom';
import './Sidebar.css';
import Hamburger from '../Hamburger/Hamburger';
class Sidebar extends React.Component{

    state= {
        toggle:true
    }

    toggleSideBarHandler = () =>{
        this.setState({toggle:!this.state.toggle});
        console.log("Called");
    }
    render(){
        return(
            this.state.toggle ?
            <div className="Sidebar">
                <button onClick={this.toggleSideBarHandler} id="menuCancel">&#x2715;</button>
                <ul className="SidebarList">
                    <NavLink onClick={this.toggleSideBarHandler} id="ListStyle" to="/"><li id="SidebarItems">SVA</li></NavLink>
                    <NavLink onClick={this.toggleSideBarHandler} id="ListStyle" to="/about"><li id="SidebarItems">About</li></NavLink>
                    <NavLink onClick={this.toggleSideBarHandler} id="ListStyle" to="/community"><li id="SidebarItems">Join Community</li></NavLink>
                    <NavLink onClick={this.toggleSideBarHandler} id="ListStyle" to="/profile"><li id="SidebarItems">Profile</li></NavLink>
                    <NavLink onClick={this.toggleSideBarHandler} id="ListStyle" to="/contactUs"><li id="SidebarItems">Contact Us</li></NavLink>
                </ul>
            </div>: <Hamburger clicked={this.toggleSideBarHandler}/>
        )
    }
}

export default Sidebar;