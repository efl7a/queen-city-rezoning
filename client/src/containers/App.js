import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


import PetitionsPage from './PetitionsPage';
import PetitionsShow from './PetitionsShow';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' render={(props) => <PetitionsPage {...props}/>} />
          <Route exact path='/:petitionId' component={PetitionsShow}/>
        </div>
      </Router>

    );
  }
}



export default App;
