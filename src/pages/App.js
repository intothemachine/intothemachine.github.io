
/* eslint-disable */ 
import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router'
import Header from '../components/Header'
import Posts from '../components/Posts'

//import logo from './logo.svg';
//import './style.css';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div className='App-Container'>
        <Header/>
        <Posts/>
      </div>
    );
  }
}
//https://suryanarayanamurthy.herokuapp.com/
export default App;
