import React from "react";
import HornedBeast from "./HornedBeast";
import Data from './data.json';

class Main extends React.Component {


  

 

  


  render() {
    return (
      <div>
        {
          Data.map(value => {
          return <HornedBeast key={value._id} title={value.title} imageUrl={value.image_url} description={value.description}/>
        })
        }
        

      </div>
    )
  }


}

export default Main;
