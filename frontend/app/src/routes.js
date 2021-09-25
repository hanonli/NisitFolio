import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing';
import Home from './home';
import MyResume from './myresume';
import Portfolio from './portfolio';
import Analytics from './analytics';
import Bookmark from './bookmark';
import Search from './search';
import Editprofile from './editprofile';
import Choosenothing from './Components/myresumeNothing';
import Chooseresume from './chooseresume';
import Myresumetp from './Components/myresumeTemplate';
import Register from './register';
import Emailverify from './emailverify';
import Successregis from './successregis';
import PDF from './pdf';

const Routes = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Landing}></Route> /* First page that user see */
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/myresume' component={MyResume}></Route>
      <Route exact path='/choosenothing' component={Choosenothing}></Route>
      <Route exact path='/myresumetp' component={Myresumetp}></Route>
      <Route exact path='/chooseresume' component={Chooseresume}></Route>
      <Route exact path='/portfolio' component={Portfolio}></Route>
      <Route exact path='/analytics' component={Analytics}></Route>
      <Route exact path='/bookmark' component={Bookmark}></Route>
	    <Route exact path='/search' component={Search}></Route>
      <Route exact path='/landing' component={Landing}></Route>
      <Route exact path='/editprofile' component={Editprofile}></Route>
      <Route exact path='/register' component={Register}></Route>
      <Route exact path='/emailverify' component={Emailverify}></Route>
      <Route path='/successregis' component={Successregis}></Route>
      <Route path='/makepdf' component={PDF}></Route>
    </Switch>
  );
}

export default Routes;