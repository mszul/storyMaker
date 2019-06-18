import React, { Component } from 'react'

export default class OptionRow extends Component {  
    handleChangeTitle(event) {
        let option = Object.assign({}, this.props.option)
        option.title = event.target.value;
        this.props.onOptionChange(option)
    }
    handleChangeDescription(event) {
        let option = Object.assign({}, this.props.option)
        option.description = event.target.value;
        this.props.onOptionChange(option)
    }
    render() {
        return (
            <tr>
                <td>
                    <input 
                        className="form-control" 
                        onChange={this.handleChangeTitle.bind(this)} 
                        value={this.props.option.title} />
                </td>
                <td>
                    <textarea 
                        rows="2" 
                        cols="50" 
                        className="form-control" 
                        onChange={this.handleChangeDescription.bind(this)}
                        value={this.props.option.description} />
                </td>
                <td><a href="#" onClick={() => this.props.onRemoveOption()}>-</a></td>
           </tr>

        )
    }
}