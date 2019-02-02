import React from 'react'
import renderer from 'react-test-renderer'
import Choice from '../../app/game/gameBoard/Choice.js';



describe("Choice component tests", () =>
 {
     test("Choice should render correctly", () => {
        console.log('test123 ')
        let component = renderer.create(<Choice id="1" description="test description"/>)
        let tree = component.toJSON();
        console.log('test2 ' + tree)
        expect(tree).toMatchSnapshot();
     }) 
 })