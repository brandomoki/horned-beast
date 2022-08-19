import React from "react";
import HornedBeast from "./HornedBeast";


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
          this.props.beastArry.map(value => {
          return <HornedBeast 
          key={value._id} 
          open={this.props.handleShow} 
          title={value.title} 
          imageUrl={value.image_url} 
          description={value.description}/>
        })
        }
        
        

      </main>
    )
  }


}

export default Main;
