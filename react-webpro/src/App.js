import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './component/Menu'
//import Network from './component/SocialMedia/Netowrk'
import About from './component/Pages/About'
import Exprince from './component/Pages/Exprince'
import Work from './component/Pages/Work'



class App extends Component {
  
  render() {
   
    return ( 
      <BrowserRouter>
          <div className= "app">
              < Menu />
              <switch>
                <Route path="/0.1 About" exact compenet={About}/>
                <Route path="/0.2 Exprince" compenet={Exprince} />
                <Route path="/0.2 Work" compenet={Work} />
               </switch>
              </div>
       </BrowserRouter>

    )
  }
}

export default App;
