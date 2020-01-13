import React, { Component } from "react";
//import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import SideDrawer from './component/SideBar/SideDrawer';
import Backdrop from './component/Backdrop/Backdrop';


class App extends Component {
  
    
  render(){
    /*
    let sideDrawer;
    let backdrop;
      if(this.state.SideDrawerOpen){
        sideDrawer = <SideDrawer />;
        backdrop = <Backdrop />
      }*/
    return (
      <div style={{height: '100%'}}>
        <Navbar />
        <SideDrawer />
        <Backdrop />
        <main style={{marginTop:'64px'}}>
          <p> this a content</p>
        </main>
      </div>
    );
  }
  
}

export default App;
