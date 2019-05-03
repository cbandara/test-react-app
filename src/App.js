import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";

import Modal from "./components/Modal/Modal";
import InitialView from "./components/InitialView/InitialView";
import SecondView from "./components/SecondView/SecondView";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {
    show: false,
    viewOneShow: true,
    viewTwoShow: false
  };

  componentDidMount() {
    setTimeout(this.showModal, 5000);
    setTimeout(this.showSecondView, 10000);
  }
  idleTimeout() {
    clearTimeout(this.showSecondView);
  }

  showSecondView = () => {
    this.setState({
      ...this.state,
      viewOneShow: !this.state.viewOneShow,
      viewTwoShow: !this.state.viewTwoShow,
      show: false
    });
    // ReactDOM.render(<SecondView />, document.body);
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
        <InitialView viewOneShow={this.state.viewOneShow} />
        <SecondView viewTwoShow={this.state.viewTwoShow} />
        <Modal onClose={this.showModal} show={this.state.show}>
          <p className="alert-text">Hey, are you still there?</p>
        </Modal>
        <Footer />
      </div>
    );
  }
  // render() {
  //   {
  //     () => {
  //       if (this.state.show) {
  //         return (
  //           <div className="App">
  //           <InitialView />
  //           <Modal onClose={this.showModal} show={this.state.show}>
  //             <p class="alert-text">Hey, are you still there?</p>
  //           </Modal>
  //           </div>

  //         )
  //       } else {
  //         return (
  //           <div className="App">
  //         <SecondView></SecondView>
  //         </div>
  //         )
  //       }
  //     }()
  //   }
  // }
}

export default App;
// const container = document.createElement("div");
// document.body.appendChild(container);
// ReactDOM.render(<App />, container);
