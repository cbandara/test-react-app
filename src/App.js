import React, { Component } from "react";
import ReactDOM from "react-dom";
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
    this.modalTimers(this.ShowModal, this.showSecondView);
  }
  modalTimers = (func1, func2) => {
    const time1 = setTimeout(func1, 5000);
    const time2 = setTimeout(func2, 10000);
    return time1, time2;
  };
  showSecondView = () => {
    ReactDOM.render(<SecondView />, document.body);
  };
  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
  render() {
  //   return (
  //     <div className="App">
  //       <InitialView />
  //       <Modal onClose={this.showModal} show={this.state.show}>
  //         <p class="alert-text">Hey, are you still there?</p>
  //       </Modal>
  //       <Footer />
  //     </div>
  //   );
  // }
    () => {
      if (this.state.show) {
        return (
          <div className="App">
          <InitialView />
          <Modal onClose={this.showModal} show={this.state.show}>
            <p class="alert-text">Hey, are you still there?</p>
          </Modal>
          </div>
          
        )
      } else {
        return(
        <div className="App">
        <SecondView></SecondView>
        </div>
        )
      }
    }
  
}

export default App;
// const container = document.createElement("div");
// document.body.appendChild(container);
// ReactDOM.render(<Dashboard />, container);
