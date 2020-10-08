import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Grid } from "@material-ui/core";

import "./App.css";
import AppBar from "./components/Application-Bar";
import Opening from "./pages/opening";

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar />
        <Switch>
          <Route path="/opening">
            <Opening />
          </Route>
          <Route path="/origin">JUMPMAN</Route>
          <Route render={() => <Redirect to="/opening" />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
