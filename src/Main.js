import React from "react";
import HornedBeast from "./HornedBeast";
import SelectedBeast from './SelectedBeast'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      count: 0,
      show: false,
      clickedBeast: null
     }
  }

  // handleClick = ( value => {
  //   this.setState({clickedBeast: value});
  //   this.handleShow();
  // }
  // )
  oneUpVotes = (e) => {
    let newState = {
      count: this.state.count + 1
    }
    this.setState(newState)
  }


  // handleClose = () => {
  //   let newClose = {
  //     show: false

  //   }

  //   this.setState(newClose)
  //  }

  //  handleShow = () => {
  //   let newShow = {
  //     show: true

  //   }
  //   this.setState(newShow)
  //  }



  


 

  render() {
    return (
      <main>
        {
          this.props.beastArry.map(value => {
          return <HornedBeast 
          openModal={this.handleShow}
          countUp={this.oneUpVotes}
          count={this.state.count}
          key={value._id} 
          open={this.props.open} 
          title={value.title} 
          imageUrl={value.image_url} 
          description={value.description}
          handleClick={this.props.handleClick}

          />
        })
        }
        <SelectedBeast 
          show={this.state.show} 
          closeModal={this.handleClose} 
          openModal={this.handleShow} 
        />
      
        

      </main>
    )
  }


}

export default Main;
