
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Data from './data.json';
import React from 'react';
import SelectedBeast from './SelectedBeast'

class App extends React.Component {

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
      <div>
       <Header />

        <Main beastArry={Data} />

       <Footer />
       <SelectedBeast />
      </div>
     );

  }

}

export default App;
