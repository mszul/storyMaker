import React, { Component } from 'react'

class ImageElement extends Component {
    render () {
        const imgSrc = this.props.imageSrc && this.props.imageSrc !== '' ?  this.props.imageSrc : process.env.PUBLIC_URL + '/icons/no-image-icon.png'
        const clickable = this.props.hasOwnProperty("clickable") ? this.props.clickable : true
        const size = this.props.hasOwnProperty("size") ? this.props.size : 70
        const imageLayerSize = this.props.hasOwnProperty("imageLayerSize") ? this.props.imageLayerSize : 5
        const contentSize = 12 - imageLayerSize
        const onClick = clickable ? this.props.onClick : () => {}
        const overlayer = clickable ?
            (<div className="image_el_overlayer" onClick={() => onClick()}></div>) : ''
        return (
            <div className="image_el_wrapper">
                {overlayer}
                <div className="row">
                        <div className={"col-"+imageLayerSize} >
                            <img src={imgSrc} className={this.props.imageClass} width={size} height={size} alt="image_element_icon"></img>
                        </div>
                        <div className={"d-flex col-"+contentSize}>
                            {this.props.children}
                        </div>         
                </div>
            </div>
        )
    }
}

export default ImageElement;
