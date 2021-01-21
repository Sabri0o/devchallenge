import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import bsCustomFileInput from 'bs-custom-file-input';




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


class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  componentDidMount() {
    bsCustomFileInput.init()
  }

  render() {
    return (
      


              <Modal
        show={this.props.show} onHide={this.props.handleClose} onChange = {this.props.uploadImage}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add photo
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
    
    
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
             <Button >Upload</Button>
           </Modal.Footer>
         </Modal>

    );
  }
}

    export default Upload;
