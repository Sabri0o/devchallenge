// import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import "./testing.header.scss"
// ///////
// import MyVerticallyCenteredModal from './upload'

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       show:false
//     };
//     this.hide_show = this.hide_show.bind(this) 
//   }


//   hide_show = (x) => {
//     console.log('clicked !!!!')
//     this.setState({ show: x });
//   };

//   render() {
//     return (
//       <div>
//         <Navbar >
//           <Form inline>
//             <Navbar.Brand>
//                 <img
//                   src="https://inconclusive-clock.surge.sh/static/media/my_unsplash_logo.e948d53e.svg"
//                   width="140"
//                   height="30"/>
//             </Navbar.Brand>
//           <FormControl  type="text" placeholder="Search"  />

//           <Button onClick={this.hide_show(true)} >Add a photo</Button>

//           <MyVerticallyCenteredModal 
//                 show={this.state.show} 
//                 handleClose={this.hide_show(false)}/>

//           </Form>
//         </Navbar>
//         </div>
//         )
//       }
//     }


// export default Header;