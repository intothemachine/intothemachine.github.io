import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hi thanks for visiting my Blog.</h2>
        </div>
        <p className="App-intro">
          This blog is currently under construction please visit it back later.
          Contact <a href="https://suryanarayanamurthy.herokuapp.com/">The Developer</a>, for further Info.
        </p>
      </div>
    );
  }
}

export default App;
