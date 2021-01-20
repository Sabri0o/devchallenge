import React from "react";

import './App.css';
import Header from '../src/components/navbar/header';
import ImageList from '../src/components/imageList/imagelist';
import {samples} from '../src/dummyImages/samples'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : samples
    };
  }

  componentDidMount(){
    console.log(this.state.data)
  }

  render() {
    return (
          <div className="App">
      
      <main>
      <Header/>
      <ImageList imagelist = {this.state.data} />
      </main>
    </div>
        )
  }
}

export default App;
