import React, { Component } from 'react'

class Choice extends Component {
    render () {
        return (
            <div><button onClick={() => this.props.onClick()}>Option {this.props.id}</button>{this.props.description}</div>
        )
    }
}

export default Choice