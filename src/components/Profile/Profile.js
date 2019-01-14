import React,{Component} from 'react';
import './Profile.css';

class Profile extends Component{
    render(){
        return(
            <div className="container">
                 <div className="Profile">
                    <p id="Title">SvaKatha fashion community</p>
                    <label>Username or E-mail *</label>
                    <input id="ProfileInput" type="text" name="username"/>

                    <label>Password *</label>
                    <input id="ProfileInput" type="password" name="username"/>

                    <button id="LoginButton">Login</button>
                    <button id="RegisterButton">Register</button>

                    <p id="forget">Forgot your password ?</p> 
                </div>
            </div>

        )
    }
}

export default Profile;