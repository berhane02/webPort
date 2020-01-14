import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if(props.show){
        drawerClasses = ['side-drawer open']
    }
    return(
        <nav className={drawerClasses}>
        <ul>
            <li> <a href = "/">about</a></li>
            <li> <a href = "/">Exprince</a></li>
            <li> <a href = "/">Work</a></li>
            <li> <a href = "/">Contact</a></li>
            <li> <a href = "/">Resume</a></li>
        </ul> 
    </nav>
    );
    
};

export default SideDrawer;