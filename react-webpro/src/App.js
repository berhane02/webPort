import React, { Component } from "react";
//import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import SideDrawer from "./component/SideBar/SideDrawer";



class App extends Component {
  render(){
    return (
      <div style={{height: '100%'}}>
        <Navbar />
        <SideDrawer/>
        <main style={{marginTop:'64px'}}>
          <p> this a content</p>
        </main>
      </div>
    );
  }
  
}

export default App;
