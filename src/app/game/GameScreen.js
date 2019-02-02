import React, { Component } from 'react'
import GameBoard from './gameBoard/GameBoard.js'
import axios from 'axios'

class GameScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            gameBoard: ""
        }
      }
      componentDidMount(){
        const comp = this
        axios.get(process.env.PUBLIC_URL + "/gameData.json").then(
          r => {
            const gameState = r.data
            comp.setState({
            gameBoard: (<GameBoard gameData={gameState}></GameBoard>)
            })
          }
        )
      }
      render () {
        return(<div id="app"> 
          {this.state.gameBoard}
        </div>)
      }
}

export default GameScreen;
