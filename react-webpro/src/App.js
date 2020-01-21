import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './component/Menu'
import Network from './component/SocialMedia/Network'
import About from './component/Pages/About'
import Exprince from './component/Pages/Exprince'
import Work from './component/Pages/Work'
import Contact from './component/Pages/Contanct'



class App extends Component {
  
  render() {
   
    return ( 
      <BrowserRouter>
          <div className= "app">
              < Menu />
              < Network />
              <switch>
              <Route path="/" exact component={About} />
              <Route path="/Exprince" component={Exprince} />
              <Route path="/Work" component={Work} />
              <Route path="/Contact" component={Contact} />
                
               </switch>
            </div>
       </BrowserRouter>

    )
  }
}

export default App;
