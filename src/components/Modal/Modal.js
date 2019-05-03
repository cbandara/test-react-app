import React from "react";
// import SecondView from "../components/SecondView/SecondView";
import "./modal.css";
// import ReactDOM from "react-dom";

export default class Modal extends React.Component {
  onClose = e => {
    this.props.idleTimeout();
    this.props.onClose && this.props.onClose(e);
  };
  // showSecondView = () => {
  //   clearTimeout();
  //   ReactDOM.render(<SecondView />, document.body);
  // };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal-wrapper">
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
