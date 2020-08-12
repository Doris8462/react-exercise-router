import React, { Component } from "react";

export default class Home extends Component {
  state = {
    url: "'/'",
  };
  render() {
    return (
      <div class="describe">
        This is a beautiful Home Page.
        <br />
        And the url is {this.state.url}.
      </div>
    );
  }
}
