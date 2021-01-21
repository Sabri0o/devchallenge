import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import bsCustomFileInput from 'bs-custom-file-input';

import $ from 'jquery'



class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      toUpload : 'nothing yet',
      file:''
    };

    this.uploadImage = this.uploadImage.bind(this)
    this.onChange = this.onChange.bind(this)
    /////
    this.selectFile = this.selectFile.bind(this)

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

    $.post("http://localhost:8080/upload_image",
      {
        "image": this.state.toUpload,
        "label": this.state.label,
      },
    (res) => {
       console.log('server response')
       this.props.sendData(res)
       alert('done')
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

          <Form.Label>Image Label</Form.Label>
          <Form.Control type="text" placeholder="label" onChange={this.onChange}/>
 


          <Form>
           <Form.File 
              id="custom-file"
              label="Custom file input"
              custom
            />
          </Form>
    
    
           </Modal.Body>
           <Modal.Footer>
             <Button onClick={this.props.handleClose}>Cancel</Button>
             <Button onClick={this.uploadImage}>Upload</Button>
           </Modal.Footer>
         </Modal>
    );
  }
}

 export default Upload;


 // bsCustomFileInput.init()

// var btn = document.getElementById('btnResetForm')
// var form = document.querySelector('form')
// if(btn) {
//   btn.addEventListener('click', function () {
//   form.reset()
// })
// }

// const Upload = (props) => {

// return (
//     <Modal
//     show={props.show} onHide={props.handleClose} onChange = {props.uploadImage}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Add photo
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>


//       <div className="input-group">
//         <div className="input-group-prepend">
  
//         </div>
//         <div className="custom-file">
//         <Form.Group as={Row}>
//         <Form.File
//           type="file"
//           className="custom-file-label"
//           id="inputGroupFile01"
//           label="Upload Boundary File"
//           custom
//         />
//       </Form.Group>
//         </div>
//       </div>


//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.handleClose}>Cancel</Button>
//         <Button >Upload</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

//   export default Upload;

// const Upload = (props) => {
//   useEffect(() => {
//     bsCustomFileInput.init();
//   }, []);

//   return (
//       <Modal
//       show={props.show} onHide={props.handleClose} onChange = {props.uploadImage}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Add photo
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
  
  
//         <div className="input-group">
//           <div className="input-group-prepend">
    
//           </div>
//           <div className="custom-file">
//           <>
//       <Form.Group as={Row}>
//         <Form.File
//           type="file"
//           className="custom-file-label"
//           id="inputGroupFile01"
//           label="Upload Boundary File"
//           custom
//         />
//       </Form.Group>
//     </>
//           </div>
//         </div>
  
  
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={props.handleClose}>Cancel</Button>
//           <Button >Upload</Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }
  
//     export default Upload;


// class Upload extends React.Component{
//   constructor(props) {
//   super(props);
//   this.state = {
//     bla:'bla'
//   };

// }

// componentDidMount() {
//   bsCustomFileInput.init()
// }


// render(){
//   return (
//         <Modal
//         show={this.props.show} onHide={this.props.handleClose} onChange = {this.props.uploadImage}
//           size="lg"
//           aria-labelledby="contained-modal-title-vcenter"
//           centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id="contained-modal-title-vcenter">
//               Add photo
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
    
    
//           <div class="container">
//         <div class="custom-file">
//           <input id="inputGroupFile01" type="file" class="custom-file-input" />
//           <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
//         </div>
//       </div>
    
    
//           </Modal.Body>
//           <Modal.Footer>
//             <Button onClick={this.props.handleClose}>Cancel</Button>
//             <Button >Upload</Button>
//           </Modal.Footer>
//         </Modal>
//       );
//     }
//   }

//     export default Upload;