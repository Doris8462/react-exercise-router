import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class AboutUs extends Component {
  state = {
    company: "ThoughtWorks Local",
    location: "Xi an",
  };
  render() {
    return (
      <div class="describe">
        Company:{this.state.company}
        <br />
        Location:{this.state.location}
        <br />
        <div className="infomation">
          For more information,please
          <br />
          view our
          <Link to="/">website. </Link>
        </div>
      </div>
    );
  }
}
