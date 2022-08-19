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
      clickedBeast: null
    }
  }

  

 






  render() {
    
    return (
      <div>
       <Header />

        <Main 
        beastArry={Data} 
        handleClick={this.handleClick} 
        open={this.handleShow}/>

       <Footer />

       <SelectedBeast 
       show={this.state.show} 
       closeModal={this.handleClose} 
       openModal={this.handleShow} />
      </div>
     );

  }

}

export default App;
