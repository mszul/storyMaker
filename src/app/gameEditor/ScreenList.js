import React, { Component } from 'react';
import ImageElement from '../common/ImageElement.js'

export default class ScreenList extends Component {

    render() {
        const screenView = []
        const screens = this.props.screens ? this.props.screens : []
        for(let screen of screens) {
            let date =  new Date().toLocaleDateString("en-US")
            screenView.push(
                    <ImageElement
                        key={'screen_elem_'+ screen.id}
                        onClick={() => this.props.onScreenChanged(screen)}
                        imageSrc={screen.imgSrc}
                        >
                        <div>
                            <div>{screen.name}</div>
                            <div>Modification Date: {date}</div>
                        </div>
                    </ImageElement>
            )
        }
        return (
            <div>
                {screenView}
            </div>
        )
    }
}
