import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from "react";



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
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleClose}>Cancel</Button>
        <Button >Upload</Button>
      </Modal.Footer>
    </Modal>
  );
}

  export default Upload;