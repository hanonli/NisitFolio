import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing';
import Home from './home';
import MyResume from './myresume';
import Portfolio from './portfolio';
import Analytic from './analytic';
import Bookmark from './bookmark';
import Data from './data';
import Agreement from './agreement';
import Information1 from './information1';
import LandingPage2 from './Components/landingPage2'; //TEST LandingPage2

const Routes = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Landing}></Route> /* First page that user see */
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/myresume' component={MyResume}></Route>
      <Route exact path='/portfolio' component={Portfolio}></Route>
      <Route exact path='/analytic' component={Analytic}></Route>
      <Route exact path='/bookmark' component={Bookmark}></Route>
      <Route exact path='/landing' component={Landing}></Route>
      <Route exact path='/data' component={Data}></Route>
      <Route exact path='/agreement' component={Agreement}></Route>
      <Route exact path='/information1' component={Information1}></Route>
      <Route exact path='/landingPage2' component={LandingPage2}></Route>
    </Switch>
  );
}

export default Routes;