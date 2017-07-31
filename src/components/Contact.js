import React, {Component} from 'react';
import '../stylesheets/contact.css';

export default class Contact extends Component{

    
    
    render(){

        

        return(
                <div className="container">
                    <h2>Contact Me</h2>

                    <div className="contact-field">
                        <form>
                            <button type="submit" className="button" ><a href={"mailto:Raphael.Okafor89@gmail.com"}>CONTACT ME</a></button>
                        </form>
                    </div>
                </div>
            )
    }
    
    
    
}