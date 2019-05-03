import React from "react";
import "./initialview.css";
import earth from "./earth.png";

export default class InitialView extends React.Component {
  render() {
    if (!this.props.viewOneShow) {
      return null;
    }
    return (
      <div className="wrapper">
        <img src={earth} alt="Earth" width="150px" />
        <h1>Initial View</h1>
      </div>
    );
  }
}
