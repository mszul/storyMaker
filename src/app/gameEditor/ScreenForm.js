import React, { Component } from 'react';
import ImageForm from '../components/ImageForm.js'
import OptionList from './optionList/OptionList.js'
import uuidv1 from 'uuid/v1'

export default class ScreenForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            screen: this.props.screen,
        }
    }
    handleChangeTitle (event) {
        let screen = Object.assign({}, this.state.screen);
        screen.name = event.target.value
        this.updateScreen(screen)
    }
    handleChangeOption (option) {
        let screen = Object.assign({}, this.state.screen);
        const index = screen.options.findIndex(o => o.id === option.id)
        screen.options[index] = option
        this.updateScreen(screen)
    }
    handleOnSave () {
        this.props.onSave(this.state.screen)
    }
    updateScreenIcon (imgSrc) { 
        let screen = Object.assign({}, this.state.screen);
        screen.imgSrc = imgSrc
        this.updateScreen(screen)
    }
    updateScreen (screen) {
        this.setState(
            {
                screen: screen
            }
        )
    }
    addOption () {
        let screen = Object.assign({}, this.state.screen);
        const options = screen.options.slice()
        options.push(
            {
                "id": uuidv1(),
                "title": "",
                "description": ""
            }
        )
        screen.options = options
        this.updateScreen(screen)
    }
    removeOption (option) {
        let screen = Object.assign({}, this.state.screen);
        const index = screen.options.findIndex(o => o.id === option.id)
        let options = screen.options.slice() 
        options.splice(index,1)
        screen.options = options
        this.updateScreen(screen)
    }
    render() {
        return (
                <form>
                    <div className="form-group">
                        <ImageForm
                             onImageUpload ={(imgSrc) => this.updateScreenIcon(imgSrc)}
                             imgSrc={this.state.screen.imgSrc}
                        />
                    </div>
                     <div className="form-group">                
                         <label htmlFor="title_input">Title</label>
                         <input 
                            type="text" 
                            id="title_input" 
                            className="form-control" 
                            value={this.state.screen.name}
                            onChange={this.handleChangeTitle.bind(this)} />
                     </div>
                     <OptionList 
                        options={this.state.screen.options}
                        onOptionAdd={() => this.addOption()}
                        onRemoveOption={(option) => this.removeOption(option)}
                        onOptionChange={(option) => this.handleChangeOption(option)}
                      />
                     <button type="button" onClick={() => this.handleOnSave()}>Save</button>                  
                </form>
                
        )
    }
}

