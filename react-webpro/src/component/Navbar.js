
import React from "react"
import DrawerToggleButton from '../component/SideBar/DrawerToggleButton';
import { NavLink } from "react-router-dom";
import './Navbar.css';


const Navbar = props =>(
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/"> THE LOGO</a></div>
            <div className="spacer"/>
            <div className= "toolbar_navigation-items">
                <ul>
                    <li> <NavLink to="/">0.1 About </NavLink></li>
                    <li> <NavLink to="/Exprince">0.2 Exprince</NavLink> </li>
                    <li> <NavLink to="/Work"> 0.3 Work </NavLink> </li>
                    <li> <NavLink to="/Contact"> 0.4 Contanct </NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
);
export default Navbar;