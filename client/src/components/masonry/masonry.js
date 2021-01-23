import React from "react";
import "./masonry.css";
import { MDBMask, MDBView } from "mdbreact";
//import '@fortawesome/fontawesome-free/css/all.min.css';
//import 'bootstrap-css-only/css/bootstrap.min.css';
import "mdbreact/dist/css/mdb.css";
import $ from "jquery";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class Masonry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: 1,
      show: false,
      password: "",
      imageId: "",
    };
    this.onResize = this.onResize.bind(this);
    this.delete = this.delete.bind(this);
    //
    this.showDeleteModal = this.showDeleteModal.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  }

  getColumns(w) {
    return (
      this.props.brakePoints.reduceRight((p, c, i) => {
        return c < w ? p : i;
      }, this.props.brakePoints.length) + 1
    );
  }

  onResize() {
    const columns = this.getColumns(this.refs.Masonry.offsetWidth);
    if (columns !== this.state.columns) {
      this.setState({ columns: columns });
    }
  }

  mapChildren() {
    let col = [];
    const numC = this.state.columns;
    for (let i = 0; i < numC; i++) {
      col.push([]);
    }
    return this.props.children.reduce((p, c, i) => {
      p[i % numC].push(c);
      return p;
    }, col);
  }
  //////////////////////
  delete() {
    //console.log()

    console.log("imageId :", this.state.imageId);
    if (this.state.password === "1990") {
      console.log("correct password");
      $.post(
        "http://localhost:8080/delete_image",
        { id: this.state.imageId },
        (res) => {
          console.log("server response");
          this.props.sendData(res);
          this.setState({ show: false });
          alert("Image deleted");
        }
      );
    } else {
      alert("Wrong password");
    }
  }

  showDeleteModal = (ele) => {
    //console.log(ele)
    this.setState({
      show: true,
      imageId: ele,
    });
  };

  hideDeleteModal = () => {
    this.setState({ show: false });
  };

  handleChange = (event) => {
    //event.persist();
    this.setState({ password: event.target.value });
    console.log(event.target.value);
  };

  ////////////
  render() {
    return (
      <div className="masonry" ref="Masonry">
        {this.mapChildren().map((col, ci) => {
          return (
            <div className="column" key={ci}>
              {col.map((child, i) => {
                return (
                  <div className="show-image" key={i} id={i}>
                    <MDBView hover>
                      {child}
                      <MDBMask className="flex-center" overlay="blue-light">
                        <p placement="bottom" className="white-text">
                          {child.props.src.label}
                        </p>

                        {/* <input onClick={()=>this.delete(child.props.src.id)}  className="the-buttons" type="button" value=" delete " /> */}
                        <Modal
                          show={this.state.show}
                          onHide={this.hideDeleteModal}
                          size="lg"
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Delete Confirmation</Modal.Title>
                          </Modal.Header>

                          <Modal.Body>
                            <Form.Group controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={this.handleChange}
                              />
                            </Form.Group>
                          </Modal.Body>

                          <Modal.Footer>
                            <Button
                              variant="secondary"
                              onClick={this.hideDeleteModal}
                            >
                              Close
                            </Button>
                            <Button
                              variant="secondary"
                              onClick={() => this.delete()}
                            >
                              Submit
                            </Button>
                          </Modal.Footer>
                        </Modal>

                        <input
                          onClick={() =>
                            this.showDeleteModal(child.props.src.id)
                          }
                          className="the-buttons"
                          type="button"
                          value=" delete "
                        />
                      </MDBMask>
                    </MDBView>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Masonry;
