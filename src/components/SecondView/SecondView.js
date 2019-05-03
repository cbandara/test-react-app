import React from "react";
import "./secondview.css";

export default class SecondView extends React.Component {
  render() {
    if (!this.props.viewTwoShow) {
      return null;
    }
    return (
      <div className="wrapper">
        <h1>Second View</h1>
      </div>
    );
  }
}
