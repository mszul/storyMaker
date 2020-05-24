import React, { Component } from "react";
import TopBar from "./TopBar.js";
import EditPane from "./EditPane.js";
import uuidv1 from "uuid/v1";
import { gameFileService } from "../services/GameFileService.js";
import { withOverlay } from "../common/overlay/Overlay.js";

export default class EditorView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editingDisabled: true
    };
  }
  onScreenChanged(screen) {
    this.setState({
      currentScreen: screen
    });
  }
  updateScreen(screen) {
    const index = this.state.screens.indexOf(this.state.currentScreen);
    const screens = this.state.screens.slice();
    screens[index] = screen;
    this.setState({
      currentScreen: screen,
      screens: screens
    });
  }
  addScreen() {
    const screens = this.state.screens.slice();
    screens.push({
      id: uuidv1(),
      name: "New Screen " + this.state.lastIndex,
      imgSrc: "",
      options: []
    });
    this.setState({
      screens: screens,
      lastIndex: this.state.lastIndex + 1
    });
  }
  saveStory() {
    gameFileService.saveStory(this.state.screens);
  }
  loadStory() {}
  newStory() {
    this.setState({
      currentScreen: null,
      lastIndex: 1,
      screens: [],
      editingDisabled: false
    });
  }
  render() {
    const EditPaneWithOverlay = withOverlay(EditPane);
    return (
      <div>
        <TopBar
          onNew={() => this.newStory()}
          onSave={() => this.saveStory()}
          onLoad={() => this.loadStory()}
          isSaveDisabled={this.state.editingDisabled}
        />
        <EditPaneWithOverlay
          screens={this.state.screens}
          currentScreen={this.state.currentScreen}
          onScreenChanged={screen => this.onScreenChanged(screen)}
          onAddScreen={() => this.addScreen()}
          onScreenSave={screen => this.updateScreen(screen)}
          showOverlay={this.state.editingDisabled}
        />
      </div>
    );
  }
}
