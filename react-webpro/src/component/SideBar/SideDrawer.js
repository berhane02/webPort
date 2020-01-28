import React from 'react';
import './SideDrawer.css';
import { NavLink } from "react-router-dom";



const SideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if(props.show){
        drawerClasses = ['side-drawer open']
    }
    return(
        <nav className={drawerClasses}>
        <ul>
            <li> <NavLink to="/">about</NavLink></li>
            <li> <NavLink to="/Exprince">Exprince</NavLink></li>
            <li> <NavLink to="/Work">Work</NavLink></li>
            <li> <NavLink to="/Contact">Contact</NavLink></li>
            <li> <a href = "/">Resume</a></li>
        </ul> 
    </nav>
    );
    
};

export default SideDrawer;