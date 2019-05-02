import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "./App.css";

import Modal from "./components/Modal/Modal";
import InitialView from "./components/InitialView/InitialView";
import SecondView from "./components/SecondView/SecondView";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {
    show: false
  };

  componentDidMount() {
    setTimeout(this.showModal, 5000);
    setTimeout(this.showSecondView, 10000);
  }
  showSecondView = () => {
    // this.setState({
    //   ...this.state,
    //   show: !this.state.show
    // });
    return <SecondView />;
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
        <InitialView />
        <Modal onClose={this.showModal} show={this.state.show}>
          <p class="alert-text">Hey, are you still there?</p>
        </Modal>
        <Footer />
      </div>
    );
  }
}

export default App;
// const container = document.createElement("div");
// document.body.appendChild(container);
// ReactDOM.render(<Dashboard />, container);
