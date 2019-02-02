import React, { Component } from 'react'

class ImageElement extends Component {
      render () {
         return (
             <div className="image_el_wrapper">
                <div className="image_el_overlayer" onClick={() => this.props.onClick()}></div>
                <div className="row">
                        <div className="col-5" >
                            <img width="70" height="70" src={this.props.imageSrc}></img>
                        </div>
                        <div className="col-7">
                            <div>{this.props.title}</div>
                            <div>{this.props.children}</div>
                        </div>         
                </div>
             </div>
         )
      }
}

export default ImageElement;
