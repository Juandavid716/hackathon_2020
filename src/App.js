import React from "react";
import "./App.css";
import Navbar from "./landing-page/NavbarClass";
import Landing from "./landing-page/Landing";
import Registro from "./landing-page/Registro";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar></Navbar>
          <Landing></Landing>
        </Route>
        <Route exact path="/registro">
          <Navbar></Navbar>
          <Registro></Registro>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
