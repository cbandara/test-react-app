import React from "react";
import "./footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer-wrapper">
        <footer>
          <p>Charutha Bandara</p>{" "}
          <a href="https://github.com/cbandara/test-react-app">
            Github Repository
          </a>
        </footer>
      </div>
    );
  }
}
