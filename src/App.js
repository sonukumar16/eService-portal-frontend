import React from 'react';
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom';

import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import PageNotFound from "./pages/notFound"

import { PrivateRoute, PublicRoute } from "./Router"
function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <PublicRoute exact path="/" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route component={PageNotFound}></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
