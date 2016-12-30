// src/pages/about.js
/* eslint-disable */ 
import React, { Component } from 'react';
import Header from '../components/Header';

//import './style.css';

export default class About extends Component {
  render() {
    return (
      <div>
      <Header showLinks="newPost"/>
      <div>
        <h1>
          About
        </h1>
      </div>
      </div>
    );
  }
}