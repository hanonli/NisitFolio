import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from './landing';
import Home from './home';
import MyResume from './myresume';
import PortfolioRoot from './portRoot';
import Portfolio from './portfolio';
import PortInfo from './portInfo';
import Analytics from './newAnalytics';
import Bookmark from './bookmark';
import Search from './search';
import Editprofile from './editprofile';
import Editresume from './editresume';
import Choosenothing from './Components/myresumeNothing';
import Myresumetp from './Components/myresumeTemplate';
import Register from './register';
import Emailverify from './emailverify';
import Successregis from './successregis';
import Failregis from './failregis';
import PDF from './pdfUrlToBase64';
import AnonymousLogin from './anonymousLogin';

const Routes = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route> /* First page that user see */
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/myresume/:id?' component={MyResume}></Route>
      <Route exact path='/choosenothing' component={Choosenothing}></Route>
      <Route exact path='/myresumetp' component={Myresumetp}></Route>
      <Route exact path='/editresume' component={Editresume}></Route>
      <Route exact path='/portfolio' component={PortfolioRoot}></Route>
      <Route exact path='/editport' component={Portfolio}></Route>
      <Route exact path='/portinfo/:id' component={PortInfo}></Route>
      <Redirect exact from="/portinfo/:id/reload" to="/portinfo/:id" />
      <Route exact path='/analytics' component={Analytics}></Route>
      <Route exact path='/bookmark' component={Bookmark}></Route>
      <Route exact path='/search' component={Search}></Route>
      <Route exact path='/landing' component={Landing}></Route>
      <Route exact path='/editprofile' component={Editprofile}></Route>
      <Route exact path='/register' component={Register}></Route>
      <Route exact path='/emailverify' component={Emailverify}></Route>
      <Route path='/successregis/:token?' component={Successregis}></Route>
      <Route path='/unsuccessregis' component={Failregis}></Route>
      <Route path='/makepdf' component={PDF}></Route>
      <Route path='/anonymouslogin' component={AnonymousLogin}></Route>
    </Switch>
  );
}

export default Routes;