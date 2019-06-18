import React from 'react'
import renderer from 'react-test-renderer'
import Choice from '../../app/game/gameBoard/Choice.js';
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});
describe("Choice component tests", () =>
 {
    test("Render is ok", () => {
        let component = renderer.create(<Choice id="1" description="test description" onClick={() => {}}/>)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
     }) 
     test("Choice click should works", () => {
        let x = 0
        let component = shallow(<Choice id="2" description="test description2" onClick={() => x = 1}/>)
        component.find("button").simulate('click')
        expect(x).toBe(1);
     }) 
 })