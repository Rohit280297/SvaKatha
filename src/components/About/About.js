import React from 'react';
import './About.css';
import AboutImg from '../../assets/images/about.png';
const About = () =>{
    return(
        <div className="container">

            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 AboutImage">

                <img src={AboutImg} alt="Image" id="AboutImage"/>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 About">

                <h3 id="AboutTitle">SvaKatha</h3>
                <p>I’m fat, I’m skinny, i’m obese, I’m dark, I’m fair but also i’m a human with my perceived thoughts
                    Sva katha stands for individuality, peculiarity, self-acceptance, optimistic and adaptable fashion. 
                    Sva katha or the <b>story of oneself</b> speaks not by face or type, but by the reflection of our very own
                    beautiful singularity which is irrelevant or unacceptable in our society. Svakatha wants to break 
                    this cocoon to revive the absolute choice of an individual. To dress oneself.
                    Through the ages that are to traced, many social norms have resisted the fluidity of
                    fashion. But now when this seal cracked sva is making a radiant effort to deduce this 
                    seal’s existence. For the Freedom of fashion and to realise the beauty of uniqueness on a grand 
                    platform. For a primary reason that choices are no more based on a model or an icon but on your 
                    heart’s content and mind’s reason.</p><br/>
                    <p>
                    Sva’s sole motive is to make fashion that shows the individuality of the customer making them 
                    feel comfortable in whatever they wear.  
                    </p><br/>

                    <p>
                    “Everything we design is with a belief of bringing out the best in you. We believe that every 
                    person is beautiful and perfect the way they are. The expression of our beliefs is evident 
                    in the designs of these beautiful garments inspired by common human’s ordinary and extraordinary 
                    stories of life. Which we spin into beautiful dresses with extreme dedication to adore you with
                     your own choice”. 
                    </p><br/>

                    <p>– SvaKatha</p>
            </div>

        </div>
    )
}

export default About;