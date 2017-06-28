var React  = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav() {
    return (
        
            <ul className="nav">
                <li>
                    <NavLink exact activeClassName="active" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="active" to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="active" to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="active" to="/blog">Blog</NavLink>
                </li>
            </ul>
       
    )
}

module.exports = Nav;