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


import Masonry from '../src/components/masonry/masonry';
import bsCustomFileInput from 'bs-custom-file-input';
import $ from 'jquery'


class App extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      images : samples,
      copy : [],
      show : false,
      brakePoints:[350, 500, 750],
      toUpload : 'nothing yet',
      file:''
    };
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.getData = this.getData.bind(this)
    this.search = this.search.bind(this)
  }

  componentDidMount() {
    //console.log('triggered')
    $.post("http://localhost:8080/get_images",
    {},
    (res) => {
      console.log('images from database',res)
      this.setState({
        images : res,
        copy : res
        })
      }
    )
  }

  showModal = () => {
    console.log('clicked to show !!! ')
    this.setState({ show: true });
  };

  hideModal = () => {
    console.log('clicked to hide !!! ')

    this.setState({ show: false });
  };

  getData = (val) =>{
    // samples.unshift(val.imageUrl);
    this.componentDidMount()
  }

  search = (event)=>{
    console.log('query: ',event.target.value)
    console.log(this.state.images.filter(x=>x.label.includes(event.target.value)))
    this.setState({
      images : this.state.copy.filter(x=>x.label.includes(event.target.value))
    })
    
  }

	render(){
		return (
			<div className="container">
              <Navbar >
                  <Form inline>
                  <Navbar.Brand>
                    <img
                      src="https://inconclusive-clock.surge.sh/static/media/my_unsplash_logo.e948d53e.svg"
                      width="140"
                      height="30"/>
                  
                  <FormControl  onChange={this.search}  type="text" placeholder="Search"  />
                 <Button onClick={this.showModal} >Add a photo</Button>
                 </Navbar.Brand>
                 </Form>
                </Navbar>
				<div className="masonry-container">
        <Upload show={this.state.show} 
                handleClose={this.hideModal} 
                sendData={this.getData}>
            <p>Modal</p>
            <p>Data</p>
        </Upload>
        <Masonry brakePoints={this.state.brakePoints} >
          {this.state.images.map((image, id) => {
							return (
								<Tile key={id} src={image} />
							) 
						})}
					</Masonry>
				</div>
			</div>
		)
	}
}

const Tile = ({src}) => {
  return (
    <div className="tile">
			<img src={src.imageUrl} />
		</div>
  );
};

export default App;
