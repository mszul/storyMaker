import React, { Component } from 'react';
import ScreenList from './ScreenList.js'
import ScreenForm from './ScreenForm.js'
import TopBar from './TopBar.js'
import uuidv1 from 'uuid/v1'

export default class EditorView extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentScreen: {
                id: '',
                name: '',
                imgSrc: '',
                options: []
            },
            lastIndex: 1,
            screens: []
        }
    }
    onScreenChanged(screen){
        this.setState(
            {
                currentScreen: screen
            }
        )
    }
    updateScreen(screen){
        const index = this.state.screens.indexOf(this.state.currentScreen)
        const screens = this.state.screens.slice()
        screens[index] = screen
        this.setState(
            {
                currentScreen: screen,
                screens: screens
            }
        )
    }
    addScreen(){
        const screens = this.state.screens.slice()
        screens.push({
            "id": uuidv1(),
            "name": "New Screen " + this.state.lastIndex,
            "imgSrc": "",
            "options": []
        })
        this.setState({
            screens: screens,
            lastIndex: this.state.lastIndex+1
        })
    }
    saveStory(){
        var file = new Blob([JSON.stringify(this.state.screens)], {type: "application/octet-stream}"});
        var url = window.URL.createObjectURL(file);
        var tempLink = document.createElement('a');
        document.body.appendChild(tempLink);
        tempLink.href = url;
        tempLink.download  = "game.story"
        tempLink.click();
        document.body.removeChild(tempLink);
        window.URL.revokeObjectURL(url);
    }
    loadStory(){

    }
    newStory(){

    }
    render() {
        return (
            <div>
                <TopBar
                    onNew={() => this.newStory()}
                    onSave={() => this.saveStory()}
                    onLoad={() => this.loadStory()}
                />
                <div className="container-fluid row p-0 mt-4">
                    <div className="col-4">
                        <ScreenList
                             screens = {this.state.screens}
                             onScreenChanged={(screen) => this.onScreenChanged(screen)}/>
                        <button onClick={() => this.addScreen()}>Add screen</button>
                    </div>
                    <div className="col-8 p-4">
                        <ScreenForm
                            key={'screenform_'+this.state.currentScreen.id}
                            screen={this.state.currentScreen}
                            onSave={(screen) => this.updateScreen(screen)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

