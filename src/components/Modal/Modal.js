import React from "react";
import "./modal.css";
import astronaut from "./astronaut.png";

export default class Modal extends React.Component {
  onClose = e => {
    this.props.idleTimeout();
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal-wrapper">
        <img src={astronaut} alt="Astronaut" width="200px" />
        {this.props.children}
        <div>
          <button
            onClick={e => {
              this.onClose(e);
            }}
          >
            Yes I'm still here
          </button>
        </div>
      </div>
    );
  }
}
