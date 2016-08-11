import React from 'react';
import {Router, Route} from 'react-router/umd/ReactRouter';

import {IndexLayout} from "./components/IndexLayout";
import {ListLayout} from "./components/ListLayout";

export default (
  <Router>
    <Route path="/" component={IndexLayout}/>
    <Route path="/list" component={ListLayout}/>
  </Router>
);