import React, { Component } from "react";
import ScreenList from "./ScreenList.js";
import ScreenForm from "./ScreenForm.js";

export default class EditPane extends Component {
  render() {
    const screenFrom = this.props.currentScreen ?
      <ScreenForm
        key={"screenform_" + this.props.currentScreen.id}
        screen={this.props.currentScreen}
        onSave={this.props.onScreenSave}
      /> : '';
    return (
      <div>
        <div className="container-fluid row pt-4 p-0">
          <div className="col-4">
            <ScreenList
              screens={this.props.screens}
              onScreenChanged={this.props.onScreenChanged}
            />
            <button onClick={() => this.props.onAddScreen()}>Add screen</button>
          </div>
          <div className="col-8 p-4">{screenFrom}</div>
        </div>
      </div>
    );
  }
}
