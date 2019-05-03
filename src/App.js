import React, { Component } from "react";
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
  returnViewOne = () => {
    this.setState({
      ...this.state,
      viewOneShow: true,
      viewTwoShow: false,
      show: false
    });
    this.setTimers();
  };

  componentDidMount() {
    this.setTimers();
  }
  setTimers() {
    setTimeout(this.showModal, 10000);
    this.secondTimeout = setTimeout(this.showSecondView, 15000);
  }
  idleTimeout() {
    clearTimeout(this.secondTimeout);
    this.setTimers();
  }

  showSecondView = () => {
    this.setState({
      ...this.state,
      viewOneShow: !this.state.viewOneShow,
      viewTwoShow: !this.state.viewTwoShow,
      show: false
    });
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
        <SecondView
          viewTwoShow={this.state.viewTwoShow}
          show={this.state.show}
          returnViewOne={this.returnViewOne}
        />
        <Modal
          onClose={this.showModal}
          show={this.state.show}
          idleTimeout={() => this.idleTimeout()}
        >
          <p className="alert-text">Hey, are you still there?</p>
        </Modal>
        <Footer />
      </div>
    );
  }
}

export default App;
