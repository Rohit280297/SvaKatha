import React,{Component} from 'react';
import './Community.css';

class Community extends Component{
    render(){
        return(
            <div className="container Community">
                <h2 id="CommunityTitle">Participate In Design Process</h2>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 CommunityForm">
                <p id="Title">SvaKatha fashion community</p>
                    <label>Username or E-mail *</label>
                    <input id="ProfileInput" type="text" name="username"/>

                    <label>Password *</label>
                    <input id="ProfileInput" type="password" name="username"/>

                    <button id="LoginButton">Login</button>
                    <button id="RegisterButton">Register</button>

                    <p id="forget">Forgot your password ?</p> 
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 CommunityDetails">
                    <p>I don’t, We do</p><br/>
                    <p>Svakatha is not a team of few humans but it’s a community that consists of 
                        everyone who shops and visits us. Our collection is not our making but they are your
                         choices that make us clear on what we need to provide. We rather not make silhouettes 
                         or dress by our search but work by the effort of all who read, suggest and shop from 
                         us. At Sva Katha we don’t make, we create what you want, what your individual and 
                         singular self-desires. Our power of making is not limited to us, but we have extended 
                         it to a common platform so every individual can put forth their options. It’s 
                         to make sure that our customers get what they want and not just settle for 
                         what they get.</p><br/>

                    <p>Our process starts by putting our collection online for 
                        the customers. This collection is the selection of the public or the end consumer.</p><br/>

                    <p>The Collection that will display would not be our imagination and creativity. But it is 
                        going to be collective voting of the buyers. We will study want buyer’s desire more 
                        and work on the design. But not that we will also see what story does the client 
                        or the end user likes and how in context of silhouette can we create and impart it.</p><br/>

                    <p>
                    So what we want is that as a brand we make you your own master in fashion sense that appeases
                     you. Which makes you feel like yourself, and not a replica of any other personality.
                    </p><br/>

                    <p>
                    By joining our community we will empower you as a consumer to make the choices that are
                    the true reflection of yourself. The imperial power of bestowing the right amount of 
                    freedom in the industry of fashion republic.
                    </p><br/><br/>
                
                
                </div>
            </div>
        )
    }
}

export default Community;