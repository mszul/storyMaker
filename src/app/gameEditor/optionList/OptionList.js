import React, { Component } from 'react';
import OptionRow from './OptionRow.js'
import './OptionList.css'

export default class OptionList extends Component {
    render() {
        let options = [];
        for(let option of this.props.options) {
            options.push(
                <OptionRow
                    option={option}
                    onOptionChange={(option) => this.props.onOptionChange(option)}
                    onRemoveOption={() => this.props.onRemoveOption(option)}
                    key={'option_' + option.id}
                 />
            )
        }
        return (
            <div>
                <strong>Options</strong>
                <table className="table table-borderless option_table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th><a href="#" onClick={() => this.props.onOptionAdd()}>+</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        {options} 
                    </tbody>
                </table>
            </div>
        )
    }
}