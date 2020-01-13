import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <li> <a href = "/">about</a></li>
            <li> <a href = "/">Exprince</a></li>
            <li> <a href = "/">Work</a></li>
            <li> <a href = "/">Contact</a></li>
            <li> <a href = "/">Resume</a></li>
        </ul> 
    </nav>
);

export default SideDrawer;