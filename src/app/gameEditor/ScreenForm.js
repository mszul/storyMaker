import React, { Component } from 'react';

export default class ScreenForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            screen: this.props.screen
        }
    }
    handleChange(event) {
        let screen = Object.assign({}, this.state.screen);
        screen.name = event.target.value
        this.setState(
                {
                    screen: screen
                }
            );
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            screen: nextProps.screen
        })
    }
    handleOnSave(){
        this.props.onSave(this.state.screen)
    }
    render() {
        return (
                <form>
                     <div className="form-group">
                         <label htmlFor="title_input">Title</label>
                         <input 
                            type="text" 
                            id="title_input" 
                            className="form-control" 
                            value={this.state.screen.name}
                            onChange={this.handleChange.bind(this)} />
                     </div>
                     <button type="button" onClick={() => this.handleOnSave()}>Save</button>   
                   
                </form>
                
        )
    }
}

