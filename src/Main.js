import React from "react";
import HornedBeast from "./HornedBeast";
import Data from './data.json';
import { getValue } from "@testing-library/user-event/dist/utils";
class Main extends React.Component {


  

 

  


  render() {
    return (
      <div>
        {
          Data.map(value => {
          return <HornedBeast title={value.title} imageUrl={value.image_url} description={value.description}/>
        })
        }
        

      </div>
    )
  }


}

export default Main;
