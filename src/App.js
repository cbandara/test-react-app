import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "./App.css";

import Modal from "./components/Modal/Modal";

// class App extends Component {
//   state = { show: false };

//   showModal = () => {
//     this.setState({ show: true });
//   };

//   hideModal = () => {
//     this.setState({ show: false });
//   };

//   render() {
//     return (
//       <main>
//         <button type="button" onClick={this.showModal}>
//           Open
//         </button>
//         <Modal handleClose={this.hideModal}>This message is from modal</Modal>
//       </main>
//     );
//   }
// }

class App extends Component {
  state = {
    show: false
  };
  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
  render() {
    return (
      <div className="App">
        <input type="button" onClick={this.showModal} value="Show Modal" />
        <Modal onClose={this.showModal} show={this.state.show}>
          Are you still there?
        </Modal>
      </div>
    );
  }
}

export default App;
// const container = document.createElement("div");
// document.body.appendChild(container);
// ReactDOM.render(<Dashboard />, container);
