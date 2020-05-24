import React, { Component } from "react";
import OptionRow from "./OptionRow.js";
import "./OptionList.css";

export default class OptionList extends Component {
  static defaultProps: {
    options: []
  };

  handleAddOption(e) {
    e.preventDefault();
    this.props.onOptionAdd();
  }

  render() {
    let optionRows = [];
    let options = this.props.options ? this.props.options : [];
    for (let option of options) {
      optionRows.push(
        <OptionRow
          option={option}
          onOptionChange={option => this.props.onOptionChange(option)}
          onRemoveOption={() => this.props.onRemoveOption(option)}
          key={"option_" + option.id}
        />
      );
    }
    const addOptionHandler = this.handleAddOption.bind(this);
    return (
      <div>
        <strong>Options</strong>
        <table className="table table-borderless option_table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>
                <a href="#" onClick={addOptionHandler}>
                  +
                </a>
              </th>
            </tr>
          </thead>
          <tbody>{optionRows}</tbody>
        </table>
      </div>
    );
  }
}
