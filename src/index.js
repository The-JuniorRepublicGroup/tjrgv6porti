import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';
import Nav from './components/Nav.js';
import FooterComponent from './components/FooterComponent.js';

ReactDOM.render(
  <Router>
    <div>
    <Nav />
    <FooterComponent />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
    
  </Router>,
  document.getElementById('root')
);
