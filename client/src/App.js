import React from "react";

import './App.css';
//import Header from '../src/components/navbar/header';
import ImageList from '../src/components/imageList/imagelist';
import {samples} from '../src/dummyImages/samples'
import 'bootstrap/dist/css/bootstrap.min.css';
///

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import Upload from '../src/components/navbar/upload';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : samples,
      show : false
    };
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  showModal = () => {
    console.log('clicked to show !!! ')
    this.setState({ show: true });
  };

  hideModal = () => {
    console.log('clicked to hide !!! ')

    this.setState({ show: false });
  };

  render() {
    return (
          <div className="App">
              <Navbar >
                <Form inline>
                <Navbar.Brand>
                  <img
                    src="https://inconclusive-clock.surge.sh/static/media/my_unsplash_logo.e948d53e.svg"
                    width="140"
                    height="30"/>
                </Navbar.Brand>
                <FormControl  type="text" placeholder="Search"  />
               <Button onClick={this.showModal} >Add a photo</Button>
               </Form>
              </Navbar>
      <main>
      <Upload show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
      </Upload>
      <ImageList imagelist={this.state.data}/>
      </main>
    </div>
        )
  }
 
}


export default App;
