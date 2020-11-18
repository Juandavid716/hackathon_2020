import React from "react";
import "./App.css";
import Navbar from "./landing-page/NavbarClass";
import Landing from "./landing-page/Landing";
import Registro from "./landing-page/Registro";
import Login from "./landing-page/Login";
import Comprador from "./landing-page/CompradorTest";

import InicioProductor from "./landing-page/InicioProductor";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/comprador" component={Comprador} />
        <Route exact path="/" component={Landing} />

        <Route exact path="/inicioProductor" component={InicioProductor} />
      </Switch>
    </Router>
  );
}

export default App;
