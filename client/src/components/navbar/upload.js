//import Modal from 'react-bootstrap/Modal';
//import Button from 'react-bootstrap/Button';
import React from "react";

import './upload.css';

const Upload = (props) => {
  
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <button onClick={props.handleClose}>Close</button>
        </section>
      </div>
    );
  };

  export default Upload;