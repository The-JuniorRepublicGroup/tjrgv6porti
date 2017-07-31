import React, {Component} from 'react';
import '../stylesheets/footer.css';

export default class Home extends Component{
    
    render(){
        return(
                <div className="footer">
                    <a href="http://google.com"><i className="fa fa-facebook fb" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="http://google.com"><i className="fa fa-linkedin linked" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="http://google.com"><i className="fa fa-github git" aria-hidden="true"></i></a>
                </div>
                
            )
    }
    
    
    
}