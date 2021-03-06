import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to James J Fan\'s React App</h2>
        </div>
        <p className="App-intro">
      This web application is built with node and react, and deployed on AWS using git as version control.
        </p>
      </div>
    );
  }
}

export default App;
