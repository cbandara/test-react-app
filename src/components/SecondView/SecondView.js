import React from "react";
import "./secondview.css";
import mars from "./mars.png";

export default class SecondView extends React.Component {
  returnViewOne = e => {
    this.props.returnViewOne && this.props.returnViewOne(e);
  };
  render() {
    if (!this.props.viewTwoShow) {
      return null;
    }
    return (
      <div className="wrapper">
        <img src={mars} alt="Mars" width="150px" />
        <h1>Second View</h1>
        <div>
          <button
            onClick={e => {
              this.returnViewOne(e);
            }}
          >
            Back
          </button>
        </div>
      </div>
    );
  }
}
