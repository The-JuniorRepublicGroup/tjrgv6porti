import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';


export default class Nav extends Component {
    
    render(){
        return(
            <div>
            
                <ul className="nav">
                    <li>
                        <NavLink exact activeStyle={{background: 'black', color: 'white'}} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeStyle={{background: 'black', color: 'white'}} to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeStyle={{background: 'black', color: 'white'}} to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeStyle={{background: 'black', color: 'white'}} to="/blog">Blog</NavLink>
                    </li>
                </ul>
                    
                
            </div>
            )
    }
    
    
    
}