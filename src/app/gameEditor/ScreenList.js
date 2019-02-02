import React, { Component } from 'react';
import ImageElement from '../components/ImageElement.js'

export default class ScreenList extends Component {
    selectScreen(screen){
        this.props.onScreenChanged(screen)
    }
    render() {
        let screenView = []
        for(let screen of this.props.screens) {
            let date =  new Date().toLocaleDateString("en-US")
            screenView.push(  
                    <ImageElement 
                        key={'screen_elem_'+ screen.id} 
                        title={screen.name} 
                        imageSrc={process.env.PUBLIC_URL + '/icons/no-image-icon.png'}
                        onClick={() => this.selectScreen(screen)}
                        >
                        Modification Date: {date}
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
