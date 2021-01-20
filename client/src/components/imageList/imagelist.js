import React from "react";
import ImageCard from '../imageCard/imagecard';
import './imagelist.css'

const ImageList = (props) => {
  
    const images = props.imagelist.map((image,id) => {
      return <ImageCard key={id} image={image} />;
    });
    
    return <div className="image-list">{images}</div>;
  };

export default ImageList;
