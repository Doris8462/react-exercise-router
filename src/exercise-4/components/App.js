import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import User from "./User";
import NotMatch from "./NotMatch";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/error" component={NotMatch} />
            <Route exact path="/" component={Home} />      
            <Route path="/:user(\d+)" component={User} />
            <Route path="/about" component={About} />
            <Redirect from="/*" to="/error" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
