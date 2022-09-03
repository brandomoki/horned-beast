import React from "react";
import HornedBeast from "./HornedBeast";
import SelectedBeast from './SelectedBeast'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      count: 0,
     }
  }




  


 

  render() {
    return (
      <main>
        {
          this.props.beastArry.map(value => {
          return <HornedBeast 
          openModal={this.props.handleShow}
          
          
          key={value._id}
          beast={value}
          title={value.title} 
          imageUrl={value.image_url} 
          description={value.description}
          

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
