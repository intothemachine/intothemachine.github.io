
/* eslint-disable */ 
import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';
import Header from '../components/Header';
import Posts from '../components/Posts';

//import logo from './logo.svg';
//import './style.css';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div>
        <Header showLinks="newPost"/>
        <div>
        <Posts/>
        <div>Hi this app is under contruction, Like all the wonders of the world, it takes time. please check back again later... contact the developer behind this, for more <a href="https://suryanarayanamurthy.herokuapp.com/" target="_blank">info.</a></div>
        </div>
      </div>
    );
  }
}
//https://suryanarayanamurthy.herokuapp.com/
export default App;
