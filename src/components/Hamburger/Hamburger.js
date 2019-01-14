import React from 'react';
import './Hamburger.css';


const Hamburger = (props) =>{
    return (
         <div className="Hamburger" onClick={props.clicked}>
            <div id="HamburgerDiv"></div>   
            <div id="HamburgerDiv"></div> 
            <div id="HamburgerDiv"></div> 
         </div>   
    )
}

export default Hamburger;