import React, {Component} from 'react';
import '../stylesheets/nav.css';
import {NavLink} from 'react-router-dom';


export default class Nav extends Component {
    
    render(){
        return(
            <div>
            
                <ul className="nav">
                    <li>
                        <NavLink exact activeStyle={{background: 'black', color: 'white'}} to="/"><i className="fa fa-home" aria-hidden="true"></i></NavLink>
                    </li>

                    <li>
                        <NavLink exact activeStyle={{background: 'black', color: 'white'}} to="/about"><i className="fa fa-address-card" aria-hidden="true"></i></NavLink>
                    </li>

                    <li>
                        <NavLink exact activeStyle={{background: 'black', color: 'white'}} to="/contact"><i className="fa fa-envelope" aria-hidden="true"></i></NavLink>
                    </li>
                    
                    <li>
                        <NavLink exact activeStyle={{background: 'black', color: 'white'}} to="/portfolio"><i className="fa fa-picture-o" aria-hidden="true"></i></NavLink>
                    </li>
                </ul>
                    
                
            </div>
            )
    }
    
    
    
}