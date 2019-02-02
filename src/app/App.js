import React, { Component } from 'react'

import './App.css'
import './gameEditor/Editor.css';
import GameScreen from "./game/GameScreen.js"
import EditorView from "./gameEditor/EditorView.js"
import { BrowserRouter as Router, Route } from "react-router-dom"



class App extends Component {

  render () {
    return(
      <Router>
        <div id="app"> 
          <Route exact path="/" component={GameScreen} />
          <Route exact path="/editor" component={EditorView} />
        </div>
      </Router>
   
    )
  }
}

export default App;
