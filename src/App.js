import React, { Component } from 'react';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./components/Nav');
var About = require('./components/About');


class App extends Component {
  render() {
    return (
      <div className="App">

          <Router>
            <div className="container">
              <Nav />
              <Route path='/about' component={About} />
            </div>
          </Router>


      </div>
    );
  }
}

export default App;
