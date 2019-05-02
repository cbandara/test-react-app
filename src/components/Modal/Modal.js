import React from "react";

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  showSecondView = () => {};
  noResponse = () => {
    setTimeout(showSecondView, 5000);
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
