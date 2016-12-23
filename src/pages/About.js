// src/pages/about.js
/* eslint-disable */ 
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Header from '../components/Header';

//import './style.css';

export default class About extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
      <Header/>
        <h1>
          About
        </h1>
      </div>
    );
  }
}