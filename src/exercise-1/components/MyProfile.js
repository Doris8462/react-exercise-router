import React, { Component } from "react";
export default class MyProfile extends Component {
  state = {
    userName: "XXX",
    gender: "Female",
    work: "IT Industry",
    website: "'/my-profile'",
  };
  render() {
    return (
      <div class="describe">
        Username:{this.state.userName}
        <br />
        Gender:{this.state.gender}
        <br />
        Work:{this.state.work}
        <br />
        Website:{this.state.website}
      </div>
    );
  }
}
