import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import "./testing.header.scss"

export default function Header() {
    return (
        <div>
  <Navbar >
    <Form inline>
      <Navbar.Brand>
          <img
            src="https://inconclusive-clock.surge.sh/static/media/my_unsplash_logo.e948d53e.svg"
            width="140"
            height="30"/>
      </Navbar.Brand>
      <FormControl  type="text" placeholder="Search"  />
      <Button  >Add a photo</Button>
    </Form>
    
  </Navbar>
        </div>
    )
}
