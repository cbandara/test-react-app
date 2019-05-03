import React from "react";
import "./initialview.css";

export default class InitialView extends React.Component {
  render() {
    if (!this.props.viewOneShow) {
      return null;
    }
    return (
      <div className="wrapper">
        <h1>Initial View</h1>
      </div>
    );
  }
}
