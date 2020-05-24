import React, { Component } from 'react'
import ImageElement from './ImageElement.js'

export default class ImageForm extends Component {
    fireUpload () {
        document.getElementById('upload_image').click()
    }
    addImageUploadListener (callback) {
        document.getElementById('upload_image').addEventListener('change', function() {
            let reader = new FileReader();
            reader.onload = function() {
                callback(this.result)
            }
            reader.readAsDataURL(this.files[0]); 
            }, false);
    }
    handleImageUploaded (imgSrc) {
        this.props.onImageUpload(imgSrc)
    }
    componentDidMount () {
        let callback = this.handleImageUploaded.bind(this)
        this.addImageUploadListener(callback)
    }
    render () {
    return (
    <div>
        <ImageElement
            clickable={false} 
            size={100}
            imageClass="border border-secondary rounded"
            imageLayerSize={3}
            imageSrc={this.props.imgSrc}>
            <div className="d-flex align-items-center">
                <button type="button" onClick={() => this.fireUpload()}>Upload</button>    
            </div>
        </ImageElement>
        <input hidden id="upload_image" type="file" name="filetoupload"></input>
    </div>
    )
    }
}
