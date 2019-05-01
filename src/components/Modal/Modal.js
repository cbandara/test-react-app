import React from "react";

export default class Modal extends React.Component {
  onClose = () => {
    setTimeout(this.props.onClose, 10000);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        {this.props.children}
        <div>
          <button
            onClick={e => {
              this.onClose(e);
            }}
          >
            Yes
          </button>
        </div>
      </div>
    );
  }
}
