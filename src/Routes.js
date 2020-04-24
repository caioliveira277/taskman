import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import Store from "./store";
import Login from "./pages/login";
import Profile from "./pages/profile";

const isAuthenticated = () => true;

const PrivateRoute = ({ component: Component }) => {
  const PrivateFn = () => {
    return (
      <Route
        render={({ history, location, match }) => {
          if (isAuthenticated())
            return (
              <Component history={history} location={location} match={match} />
            );

          return <Redirect to={{ pathname: "/", state: { from: location } }} />;
        }}
      />
    );
  };
  return PrivateFn();
};
PrivateRoute.prototype = {
  component: PropTypes.func.isRequired,
  location: PropTypes.string,
};

export default function Routes() {
  return (
    <Provider store={Store}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </Provider>
  );
}
