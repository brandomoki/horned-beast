import React from 'react';


import Card from 'react-bootstrap/Card';






class HornedBeast extends React.Component {


  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }

  oneUpVotes = () => {
    
    this.setState({count: this.state.count + 1})
    this.props.openModal(this.props.beast)
  }
  

  render() {
    console.log('this is state', this.state)
    console.log('props', this.props);
    

    return (

      

      <Card onClick={this.oneUpVotes} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.imageUrl} />

          <Card.Body >
            <Card.Title>{this.props.title}</Card.Title>
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