import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {




  render() {
    console.log('clicked beast', this.props.clickedBeast)


    return (
      <>
        <Modal show={this.props.show} onHide={this.props.closeModal}>
          
          <Modal.Header closeButton>
            <Modal.Title>{this.props.clickedBeast?.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img src={this.props.clickedBeast?.image_url} width="250" alt={this.props.clickedBeast?.title} />
            
          </Modal.Body>

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