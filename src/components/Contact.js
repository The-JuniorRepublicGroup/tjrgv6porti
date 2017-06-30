import React, {Component} from 'react';


export default class Contact extends Component{
    
    render(){
        return(
                <div className="container">
                    <h2>Contact Us</h2>

                    <div>
                        <form>
                            <input type="text" name="name" value={this.state.name} placeholder="Enter Name here..." />
                            <input type="email" name="email" value={this.state.email} placeholder="Enter Email here..." />
                            <br />
                            <input type="textarea" name="message" value={this.state.message} placeholder="Enter Message here..." />
                            <br />
                            <button type="submit">SEND</button>
                        </form>
                    </div>
                </div>
            )
    }
    
    
    
}