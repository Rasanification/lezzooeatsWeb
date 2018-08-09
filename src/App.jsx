import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Merchants from './components/Merchants/Merchants';

import Navbar from './components/NavigationBar/NavigationBar';
import Categories from './components/NavigationBar/Categories';

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Navbar />
          <Route exact path="/Merchants" component={Merchants} />
          <Categories />
        </div>
      </Router>
    );
  }
}

export default App;
