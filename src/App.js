import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Data from './data.json';
import Form from 'react-bootstrap/Form';

import SelectedBeast from './components/SelectedBeast'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      show: false,
      clickedBeast: {},
      beastArry: Data,
      
    }
  }

  

  handleClose = () => {
 

    this.setState({show: false})
   }

   handleShow = (beast) => {
   
    this.setState({clickedBeast: beast, show: true})
   }



   handleHornSelect = (event) => {
    let horn = event.target.value;

    if (horn === '1') {
      let newArry = Data.filter(value => value.horns === 1);
      this.setState({beastArry: newArry});
    } else

    if (horn === '2') {
      let newArry = Data.filter(value => value.horns === 2);
      this.setState({beastArry: newArry});
    } else

    if (horn === '3') {
      let newArry = Data.filter(value => value.horns === 3);
      this.setState({beastArry: newArry});
    } else {

      this.setState({
        beastArry: Data
      })
    }

  }
 


  render() {
    console.log('beast array', this.state.beastArry);
    
    return (
      <div>
       <Header />
      <>
        <Form.Select onChange={this.handleHornSelect} >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        </>


        <Main 
        beastArry={this.state.beastArry} 
        
       
        handleShow={this.handleShow}
        />


       <SelectedBeast 
       show={this.state.show} 
       closeModal={this.handleClose} 
       
       clickedBeast={this.state.clickedBeast}

        />
       <Footer />
      </div>
     );

  }

}

export default App;
