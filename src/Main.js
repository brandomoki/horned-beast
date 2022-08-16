import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HornedBeast title="Beast 1" imageUrl='https://via.placeholder.com/150/' description='description goes here'/>
        <HornedBeast title="Beast 2" imageUrl='https://via.placeholder.com/150/' description='description goes here'/>

      </div>
    )
  }


}

export default Main;
