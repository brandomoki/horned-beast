import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Data from './data.json';

import SelectedBeast from './SelectedBeast'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      show: false,
      clickedBeast: {},
    }
  }

  

  handleClose = () => {
 

    this.setState({show: false})
   }

   handleShow = (beast) => {
   
    this.setState({clickedBeast: beast, show: true})
   }
 

/// 




  render() {
    
    return (
      <div>
       <Header />

        <Main 
        beastArry={Data} 
        
       
        handleShow={this.handleShow}/>

       <Footer />

       <SelectedBeast 
       show={this.state.show} 
       closeModal={this.handleClose} 
       
       clickedBeast={this.state.clickedBeast}

        />
      </div>
     );

  }

}

export default App;
