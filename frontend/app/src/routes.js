import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing';
import Home from './home';
import Data from './data';
import Agreement from './agreement';
import Information1 from './information1';


const Routes = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Landing}></Route> /* First page that user see */
	  <Route exact path='/home' component={Home}></Route>
      <Route exact path='/landing' component={Landing}></Route>
      <Route exact path='/data' component={Data}></Route>
      <Route exact path='/agreement' component={Agreement}></Route>
      <Route exact path='/information1' component={Information1}></Route>
    </Switch>
  );
}

export default Routes;