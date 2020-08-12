import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import MyProfile from "./MyProfile";
import Products from "./Products";
import "../styles/header.css";
export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/myProfile">My Profile</Link>
          <Link to="/aboutUs">About Us</Link>
        </div>

        <Switch>
          <Route path="/myProfile" component={MyProfile} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/products" component={Products} />
          <Route path="/products/:id" component={Products} />
          <Route path="/goods" component={Products} />
          <Route path="*" component={Home} />
        </Switch>
      </div>
    );
  }
}
