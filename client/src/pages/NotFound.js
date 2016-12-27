/* eslint-disable */ 
import React, { PropTypes, Component } from 'react';
import Header from '../components/Header';

export default class NotFound extends Component {

  render() {
    return (
      <div >
      <Header showLinks = "newPost"/>
        <h1>
          404 <small>Not Found :(</small>
        </h1>
      </div>
    );
  }
}