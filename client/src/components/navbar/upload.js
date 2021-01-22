import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from "react";
import Form from "react-bootstrap/Form";
import bsCustomFileInput from 'bs-custom-file-input';
import $ from 'jquery'



class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      toUpload : 'nothing yet',
      file:'',
      isLoading : false
    };

    this.uploadImage = this.uploadImage.bind(this)
    this.onChange = this.onChange.bind(this)
    /////
    //this.selectFile = this.selectFile.bind(this)
  }

  componentDidMount() {
    bsCustomFileInput.init()
  }

  //////

  selectFile = (event) => {    // add event to parameter
    let thisFile = event.target.files
    if (thisFile){
      var reader = new FileReader();
      reader.readAsDataURL(thisFile[0])
      // this.state.file = event.target.files[0].name
      
      reader.onload = (event) => {
        this.setState({
          toUpload : event.target.result,
          file :thisFile[0].name
        })
        //this.state.toUpload = event.target.result 
        //console.log("image to upload",event.target.result )
        //this.state.file = thisFile[0].name
        //console.log( this.state.file)
      }
    }
    
    if (this.customFileInit) {
      bsCustomFileInput.destroy();
    }
    bsCustomFileInput.init();
    this.customFileInit = true;
  }

///////

  onChange (event) {
    //console.log(event.target.value)
    this.setState({
      label:event.target.value
    })
  }

  uploadImage () {
    //console.log('image string: ',this.state.toUpload)
    //console.log('file name: ',this.state.label)
    this.setState({
      isLoading : true
    })

    $.post("http://localhost:8080/upload_image",
      {
        "image": this.state.toUpload,
        "label": this.state.label,
      },
    (res) => {
       console.log('server response')
       this.props.sendData(res)
       this.setState({
        isLoading : false
       })
      }
    )
  };


  render() {
    return (
      <Modal
        show={this.props.show} onHide={this.props.handleClose} onChange = {this.selectFile}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>

          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add photo
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
          <Form.Label >Image Label :</Form.Label>
          <Form.Control  type="text" placeholder="label" onChange={this.onChange}/>
          <br/>
          <Form.Label>Image Path :</Form.Label>
           <Form.File 
              id="custom-file"
              label="...."
              custom
            />  
          </Form>
    
    
           </Modal.Body>
           <Modal.Footer>
             <Button disabled={this.state.isLoading} onClick={this.props.handleClose}>Cancel</Button>
             <Button disabled={this.state.isLoading} onClick={!this.state.isLoading ? this.uploadImage : null}>{this.state.isLoading ? 'Loading…' : 'Upload'}</Button>
           </Modal.Footer>
         </Modal>
    );
  }
}

 export default Upload;


