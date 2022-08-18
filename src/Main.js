import React from "react";
import HornedBeast from "./HornedBeast";
import Data from './data.json';
import SelectedBeast from './SelectedBeast'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = { show: false }
  }

 
  
  handleClose = () => {

    this.setState( { show: false })
   }

  handleShow = () => {

    this.setState( { show: true })
   }


  render() {
    return (
      <main>
        {
          Data.map(value => {
          return <HornedBeast key={value._id} open={this.handleShow} title={value.title} imageUrl={value.image_url} description={value.description}/>
        })
        }
        <SelectedBeast />
        

      </main>
    )
  }


}

export default Main;
