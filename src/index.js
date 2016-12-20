import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';

import Router from './routes';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory} />,
  document.getElementById('root')
);
