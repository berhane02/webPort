import React, { Component } from "react";
//import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './component/Menu';



class App extends Component {
  /*state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }*/

  render() {
    /*let backdrop
   
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }*/
    return (
      /*
      <div style={{ height: '100%' }}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{ marginTop: '64px' }}>
          <p>This is the page content!</p>
        </main>
      </div>*/
      
        <div className= "app">
           < Menu />
        </div>
         
        
    )
  }
}

export default App;
