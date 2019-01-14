import React,{Component} from 'react';
import './Home.css';
import GIF from '../../assets/gifs/home_page_gif.gif';
import Logo from '../../assets/images/logo.png';
import Model1 from '../../assets/images/pallu.png';
import Minimalist from '../../assets/images/minimalist.jpg';

class Home extends Component{
    render(){
        return(
            <div className="Home">

                {/* Section One */}
                <div className="container">
                    <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 GifSection">
                            <img src={GIF} alt="GIF" id="gif"/>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12 LogoSection">
                        <div id="LogoData">
                        <img src={Logo} alt="LOGO" id="logo"/>
                        <div id="Data">
                            <h3 id="DataTitle">SvaKatha</h3>
                            <p id="data">Blending Stories in fabric</p>
                        </div>
                        <h2 id="FashComm">Fashion Community</h2>
                        <button id="JoinNow">Join Now</button>
                        </div>
                    </div>
                </div>

                <hr style={{"border":"0.5px solid #000"}}/>

                {/* Section 2 */}

                <div className="Chapter_1">
                        <h3 id="Chap_1_Title">SvaKatha Chapter One</h3>
                        <h2 id="Chap_1_SubTitle">Affiliation</h2>
                </div>
                
                <div className="Parallax">
                    <div className="PalluDiv col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <p id="Pallu_Data">Fabricated traditionally, presented as contemporary, PALLU is a garment made 
                            from a mother saree resembling love, care and support for her daughter.</p>
                    </div>
                        <p className="PalluTitle">PALLU</p>
                </div>

                {/* Section 3 */}
                <div className="container models">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="PalluModel">
                                <img src={Model1} alt="Pallu" id="PalluImage"/>
                            </div>
                        </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div id="row1">
                            <div id="ReleaseDate">
                                <button id="Date">Release Date - 13 Jan 2019</button>
                            </div>
                        </div>
                        <div id="row2">
                            <div id="StoryBoard">
                                <button id="StoryTitle">Story Board</button>
                            </div>
                        </div>
                    </div>
                </div>
                

                {/* Section 4 */}
                    <div className="Chapter_2">
                        <h3 id="Chap_2_Title">SvaKatha Chapter Two</h3>
                        <h2 id="Chap_2_SubTitle">OutSpoken</h2>
                    </div>   

                <div className=" container-fluid Chap2Image">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" >
                        <img src={Minimalist} alt="Minimalist" id="minimalist" />
                     </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" >
                        <div id="UpcomingStoryDiv">
                            <button id="StoryTitle">Upcoming Story</button>
                        </div>
                    </div>
                </div>

                <hr/>


            </div>

        );
    }
}

export default Home;