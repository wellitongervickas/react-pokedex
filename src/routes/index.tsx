import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import routes from 'routes/routes';

const Routes = () => (
  <Router>
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          component={route.component}
          exact
        />
      ))}
    </Switch>
  </Router>
);

export default Routes;
