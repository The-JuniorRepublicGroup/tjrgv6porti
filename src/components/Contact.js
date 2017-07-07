import React, {Component} from 'react';


export default class Contact extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name : '',
            email : 'testemail@email.com',
            message : 'this is a test message'
        }
    }

  

    sendEmail(event) {
        // do something with email here
        event.preventDefault()

        fetch('/contactus', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            email: this.state.email,
            name: this.state.name,
            message: this.state.message
            // then continue this with the other inputs, such as email body, etc.
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.success) {
            this.setState({formSent: true})
            }
            else this.setState({formSent: false})
        })
        .catch((error) => {
            console.error(error);
        });
    }
    
    render(){

        

        return(
                <div className="container">
                    <h2>Contact Us</h2>

                    <div>

                        <p>{this.state.name}</p>

                        <form>
                            <input type="text" name="name" value={this.state.name} placeholder="Enter Name here..." />
                            <input type="email" name="email" value={this.state.email} placeholder="Enter Email here..." />
                            <br />
                            <input type="textarea" name="message" value={this.state.message} placeholder="Enter Message here..." />
                            <br />
                            <button type="submit" onClick={this.sendEmail.bind(this)} >SEND</button>
                        </form>
                    </div>
                </div>
            )
    }
    
    
    
}