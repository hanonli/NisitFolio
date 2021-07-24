import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landing';
import Home from './home';
import Data from './data';

const Routes = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route> /* First page that user see */
	  <Route exact path='/home' component={Home}></Route>
      <Route exact path='/landing' component={Landing}></Route>
      <Route exact path='/data' component={Data}></Route>
    </Switch>
  );
}

export default Routes;