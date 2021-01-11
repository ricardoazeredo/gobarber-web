import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';

// eslint-disable-next-line no-multi-assign
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signUp" component={SignUp} />
  </Switch>
);

export default Routes;
