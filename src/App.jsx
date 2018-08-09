import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Merchants from './components/Merchants/Merchants';

import Navbar from './components/NavigationBar/NavigationBar';
import Categories from './components/NavigationBar/Categories';

class App extends Component {

  constructor(props){
    super(props)
    this.state= {
      isShown: true
    }
  }
  render() {
    return (

      <Router>
        <div>
          <Navbar onClickButton={()=>this.setState({isShown:true})} />
          <Route exact path="/Merchants" component={Merchants} />
          <Categories isShown={this.state.isShown} />
        </div>
      </Router>
    );
  }
}

export default App;
