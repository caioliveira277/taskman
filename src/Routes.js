import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import Store from "./store";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Tasks from "./pages/tasks";

const isAuthenticated = () => true;

const PrivateRoute = ({ component: Component }) => {
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
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default function Routes() {
  return (
    <Provider store={Store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/tasks" component={Tasks} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </Provider>
  );
}
