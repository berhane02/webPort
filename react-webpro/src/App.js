import React, { Component } from "react";
//import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

//import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './component/Menu'
import Network from './component/SocialMedia/Netowrk'



class App extends Component {
  
  render() {
   
    return ( 
     // <BrowserRouter>
           <div className= "app">
           < Menu />
           < Network />
          </div>
     // </BrowserRouter>
       
         
        
    )
  }
}

export default App;
