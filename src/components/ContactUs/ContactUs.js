import React,{Component} from 'react';
import './ContactUs.css';

class ContactUs extends Component{
    render(){
        return (
            <div className="ContactForm">
            <h3 className="ContactUsTitle">Contact Us</h3>
                <form>
                    <input id="inputField" type="text" name="Name" placeholder="Your Name" />
                    <input id="inputField" type="text" name="Email" placeholder="Your Email" />
                    <input id="inputField" type="text" name="subject" placeholder="Write your Subject..."/>
                    <input id="inputField" type="text" name="message" placeholder="Write your message..."/>
                    <input id="inputField" type="submit" value="SEND"/> 
                </form>
            </div>
        )
    }
}

export default ContactUs;