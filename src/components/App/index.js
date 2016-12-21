
/* eslint-disable */ 
import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router'
import classnames from 'classnames';

import logo from './logo.svg';
import './style.css';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hi thanks for visiting my Blog.</h2>
        </div>
        <p className="App-intro">
          This blog is currently under construction please visit it back later.
          Contact <Link to="/about">The Developer</Link>, for further Info.
        </p>
      </div>
    );
  }
}
//https://suryanarayanamurthy.herokuapp.com/
export default App;
