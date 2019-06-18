import React from 'react'
import renderer from 'react-test-renderer'
import fs from 'fs'
import GameBoard from '../../app/game/gameBoard/GameBoard.js';

describe("GameBoard tests", () => {
    let gameState = ''
    beforeAll(() => {
        gameState = JSON.parse(fs.readFileSync('./src/tests/game/sampleGameData.json', 'utf8'))
    })
    test("Should render correctly", () => {
        console.log(gameState)
        let component = renderer.create(<GameBoard gameData={gameState}></GameBoard>)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})