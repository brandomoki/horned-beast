import React from 'react';

class VotesButton extends React.Component {

  render() {
    return (
      <button onClick={this.props.handleClick} >
        {this.props.prompt}
      </button>
    )
  }
}

export default VotesButton;