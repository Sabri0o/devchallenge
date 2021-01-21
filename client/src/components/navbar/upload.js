import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";



const Upload = (props) => {

return (
    <Modal
    show={props.show} onHide={props.handleClose}
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


      <div className="input-group">
        <div className="input-group-prepend">
  
        </div>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
          />
        <label className="custom-file-label" htmlFor="inputGroupFile01">
        Choose file
        </label>
        </div>
      </div>


      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleClose}>Cancel</Button>
        <Button >Upload</Button>
      </Modal.Footer>
    </Modal>
  );
}

  export default Upload;