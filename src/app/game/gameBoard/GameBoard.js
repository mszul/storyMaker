import React, { Component } from 'react';
import Choice from './Choice.js'

class GameBoard extends Component {
  constructor(props) {
    super(props)
    this.state =  {
      gameData : this.props.gameData,
      currentScreen : {},
      screenMap: this.createScreenMap(this.props.gameData.screens)
    }
  }
  createScreenMap(screens) {
    const screenMap = {}
    screens.forEach((s) => {
        screenMap[s.id] = s
    })
    return screenMap
  }
  setCurrentScreen (id) {
    const screen = this.state.screenMap && this.state.screenMap.hasOwnProperty(id) ? this.state.screenMap[id] : null;
    if(!screen)
      return
    this.setState({
      currentScreen: JSON.parse(JSON.stringify(screen))
    })
  }
  componentDidMount() {
    this.setCurrentScreen(this.state.gameData.startScreen)
  }
  render () {
    const imageSrc = this.state.currentScreen.hasOwnProperty("imageSrc") ? this.state.currentScreen.imageSrc : ""
    const description = this.state.currentScreen.hasOwnProperty("description") ? this.state.currentScreen.description : ""
    const options = this.state.currentScreen.hasOwnProperty("options") ? this.state.currentScreen.options : []
    const choices = [];
    for(let option of options){
        choices.push((<Choice id={option.id} description={option.description} onClick={() => this.setCurrentScreen(option.targetScreenId)}></Choice>))
    }
    return(<div id="game_screen" class="container"> 
        <div id="game_image">
           <img src={imageSrc} width="600" height="400"></img>
           <div>
             {description}
           </div>
           <div>
             {choices}
           </div>
        </div>

    </div>)
  }
}

export default GameBoard;
