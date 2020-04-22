import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./pages/login";
import Store from "./store";

export default function Routes() {
  return (
    <Provider store={Store}>
      <Router>
        <Route exact path="/login" component={Login} />
      </Router>
    </Provider>
  );
}
