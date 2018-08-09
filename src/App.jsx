import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import merchants from './components/merchants/merchants';
import account from './components/account/account';

import Navbar from './components/navigationBar/navigationBar';

class App extends Component {
  render() {
    return (
      
      <Router>
        <div>
          <Navbar />
          <Route exact path="/merchants/merchants" component={merchants} />
          <Route path="/account/account" component={account} />
        </div>
      </Router>
    );
  }
}

export default App;
