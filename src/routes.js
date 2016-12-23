import React from 'react';
import { Router, Route } from 'react-router';

import App from './pages/App';
import About from './pages/About';
import NotFound from './pages/NotFound';
import PostDetails from './pages/PostDetails'
import PostNew from './pages/PostNew'

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/postdetails:id" component={PostDetails} />
    <Route path="PostNew" component={PostNew}/>
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;