import React from 'react';
import VotesButton from './VotesButton';
import SelectedBeast from './SelectedBeast';


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

      <div>
        <h2>{this.props.title}</h2>
        <h2>Hearts: {this.state.count}</h2>

        <img 
        src={this.props.imageUrl} 
        alt={this.props.description}
        onClick={this.props.show} 
        >
        </img>

        <p>{this.props.description}</p>

        <VotesButton prompt='Vote Here' handleClick={this.oneUp}/> 

      </div>

    )
  }
}
export default HornedBeast;