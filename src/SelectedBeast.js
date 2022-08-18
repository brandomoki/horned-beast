import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

 
  
   handleClose = () => {

    this.setState( { show: false })
   }

   handleShow = () => {

    this.setState( { show: true })
   }

  render() {

    return (
      <div >
        <Modal show={this.state.handleShow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }



}

export default SelectedBeast;