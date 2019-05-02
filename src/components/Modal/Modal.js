import React from "react";

import "./modal.css";

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div class="modal-wrapper">
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
