import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {




  render() {

    return (
      <>
        <Modal show={this.props.open} onHide={this.props.closeModal}>
          
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>

          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }



}

export default SelectedBeast;