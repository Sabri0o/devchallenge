import React from "react";
import Card from 'react-bootstrap/Card';


// class ImageCard extends React.Component {
//     render() {
//       return (
//         <div>
//           <img
//             src={this.props.image}
//             alt='test'
//           />
//         </div>
//       );
//     }
//   }
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spans:0};
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 );
    this.setState({ spans: spans});
  }

  render() {
   // const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <Card.Img variant="top" src={this.props.image}  ref={this.imageRef} />
        
      </div>
    );
  }
}

export default ImageCard;
/*<img ref={this.imageRef} src={this.props.image} alt='blabla' />*/