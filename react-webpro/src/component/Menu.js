import React, { Component } from "react";
//import { BrowserRouter, Route } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import SideDrawer from './SideBar/SideDrawer';
import Backdrop from './Backdrop/Backdrop';


class Menu extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop
   
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{ height: '100%' }}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
      </div>
    )
  }
}

export default Menu;