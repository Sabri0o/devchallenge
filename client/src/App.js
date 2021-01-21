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


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data : samples,
//       show : false
//     };
//     this.showModal = this.showModal.bind(this)
//     this.hideModal = this.hideModal.bind(this)
//   }

//   showModal = () => {
//     console.log('clicked to show !!! ')
//     this.setState({ show: true });
//   };

//   hideModal = () => {
//     console.log('clicked to hide !!! ')

//     this.setState({ show: false });
//   };

//   render() {
//     return (
//           <div className="App">
//               <Navbar >
//                 <Form inline>
//                 <Navbar.Brand>
//                   <img
//                     src="https://inconclusive-clock.surge.sh/static/media/my_unsplash_logo.e948d53e.svg"
//                     width="140"
//                     height="30"/>
//                 </Navbar.Brand>
//                 <FormControl  type="text" placeholder="Search"  />
//                <Button onClick={this.showModal} >Add a photo</Button>
//                </Form>
//               </Navbar>
//       <main>
//       <Upload show={this.state.show} handleClose={this.hideModal}>
//           <p>Modal</p>
//           <p>Data</p>
//       </Upload>
//       <ImageList imagelist={this.state.data}/>
//       </main>
//     </div>
//         )
//   }
 
// }


// export default App;
import Masonry from '../src/components/masonry/masonry';


class App extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      images : samples,
      show : false,
      brakePoints:[350, 500, 750],
      toUpload : '',
      file:''
    };
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.selectFile = this.selectFile.bind(this)
  }

  showModal = () => {
    console.log('clicked to show !!! ')
    this.setState({ show: true });
  };

  hideModal = () => {
    console.log('clicked to hide !!! ')

    this.setState({ show: false });
  };


  selectFile = (event) => {    // add event to parameter
    let thisFile = event.target.files
    if (thisFile){
      var reader = new FileReader();
      reader.readAsDataURL(thisFile[0])
      // this.state.file = event.target.files[0].name
      
      reader.onload = (event) => {
        this.state.toUpload = event.target.result 
        console.log("image to upload",event.target.result )
        this.state.file = thisFile[0].name
        console.log( this.state.file)
      }
    }
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
                  </Navbar.Brand>
                  <FormControl  type="text" placeholder="Search"  />
                 <Button onClick={this.showModal} >Add a photo</Button>
                 </Form>
                </Navbar>
				<div className="masonry-container">
        <Upload show={this.state.show} handleClose={this.hideModal} uploadImage = {this.selectFile} fileName={this.state.file}>
            <p>Modal</p>
            <p>Data</p>
        </Upload>
        <Masonry brakePoints={this.state.brakePoints}>
          {this.state.images.map((image, id) => {
							return (
								<Tile src={image} />
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
			<img src={src} />
		</div>
  );
};

export default App;
