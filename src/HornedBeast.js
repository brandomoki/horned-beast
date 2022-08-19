import React from 'react';


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

      

      <Card onClick={this.oneUp} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.imageUrl} />

          <Card.Body >
            <Card.Title>{ () => this.props.title }</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>{this.state.count}</Card.Text>
            
          </Card.Body>

        </Card>

    )
  }
}
export default HornedBeast;