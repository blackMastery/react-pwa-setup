import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { DetailsViewOne, DetailsViewTwo } from './components/Details/DetailContainer'


class App extends Component {
  render() {
    return (
      
      <Router>
           <div>
           <Route exact path="/" component={DetailsViewOne} />
           <Route exact path="/details2" component={DetailsViewTwo} />
           </div>
        </Router>
    );
  }
}

export default App;
