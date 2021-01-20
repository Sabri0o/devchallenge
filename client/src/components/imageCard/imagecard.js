import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


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
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={this.props.image}  alt='blabla' />
      </div>
    );
  }
}

export default ImageCard;
