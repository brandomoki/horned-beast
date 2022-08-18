import React from 'react';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';






class HornedBeast extends React.Component {


  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }

  oneUp = (e) => {
    let newState = {
      count: this.state.count + 1
    }
    this.setState(newState)
  }
  

  render() {

    return (

      

      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.imageUrl} />

          <Card.Body onClick={this.props.open}>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>{this.state.count}</Card.Text>
            <Button onClick={this.oneUp} variant="primary">Vote</Button>
          </Card.Body>

        </Card>

    )
  }
}
export default HornedBeast;