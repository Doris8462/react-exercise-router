import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

class App extends Component {
  render() {
    return (
      <div className="app">
      <BrowserRouter>
        <Header></Header>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
