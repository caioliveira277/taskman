import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/login";

export default function Routes() {
  return (
    <Router>
      <Route exact path="/login" component={Login} />
    </Router>
  );
}
