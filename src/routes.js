import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './pages/App';
import About from './pages/About';
import NotFound from './pages/NotFound';
import PostDetails from './pages/PostDetails'
import PostNew from './pages/PostNew'

const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/postdetails:id" component={PostDetails} />
    <Route path="postNew" component={PostNew}/>
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;