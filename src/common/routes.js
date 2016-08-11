import React from 'react';
import {Router, Route} from 'react-router/umd/ReactRouter';

import {IndexLayout} from "./components/IndexLayout";

export default (
  <Router>
    <Route path="/" component={IndexLayout}/>
  </Router>
);