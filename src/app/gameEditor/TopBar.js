import React, { Component } from "react";

export default class TopBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-lg bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => this.props.onNew()}
              >
                New
              </a>
            </li>
            <li className="nav-item">
              {" "}
              <a
                className={
                  "nav-link " + (this.props.isSaveDisabled ? "disabled" : "")
                }
                href="#"
                onClick={() => this.props.onSave()}
              >
                Save
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => this.props.onLoad()}
              >
                Load
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
