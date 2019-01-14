import React, { Component } from 'react';
import './App.css';

//Imported Components
import Home from '../components/Home/Home';
import ContactUs from '../components/ContactUs/ContactUs';
import Profile from '../components/Profile/Profile';
import Community from '../components/Community/Community';
import About from '../components/About/About';
import Hamburger from '../components/Hamburger/Hamburger';
import Navbar from '../components/Navbar/Navbar';
import jump from 'jump.js';
import Sidebar from '../components/Sidebar/Sidebar';

//Routing Imports
import {BrowserRouter as Router,Route} from 'react-router-dom';
class App extends Component {

    state= {
    toggle:false
    }

    toggleSideBarHandler = () =>{
    this.setState({toggle:true});
    console.log("Called");
      }
  render() {
    return (
      <Router>
      <div className="App">
        <div className="top"></div>
        <div className="Svakatha">
        <p id="PageTitle">SvaKatha</p>
        {this.state.toggle ? <Sidebar/> : <Hamburger clicked={this.toggleSideBarHandler}/>}
        <Navbar/>
        </div>

        
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/community" component={Community}/>
        <Route exact  path="/profile" component={Profile}/>
        <Route exact path="/contactUs" component={ContactUs}/>


        <footer>
          <button onClick={() => jump('.top',{offset:-500})} className="ScrollButton">&#65087;</button>
          <h2 id="FooterTitle">Svakatha</h2>
          <p id="footer_copyright">&copy; Svakatha 2019</p>
          <p id="footer_subtitle">Work of SvaKatha Design Group</p>
        </footer>
      </div>
      </Router>
    );
  }
}

export default App;
