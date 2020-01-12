import React from "react"
import SideBar from '../component/SideBar/SideBar'
import './Navbar.css';


const Navbar = props =>(
    <header className="navbar">
        <nav className="navbar_navigation">
            <div><SideBar /></div>
            <div className="navbar_logo"><a href="/"> THE LOGO</a></div>
            <div className="spacer"/>
            <div className= "navbar_navigation-item">
                <ul>
                    <li> <a href="/"> 0.1 About </a> </li>
                    <li> <a href="/"> 0.2 Exprince </a> </li>
                    <li> <a href="/"> 0.3 Work </a> </li>
                    <li> <a href="/"> 0.4 Contanct </a> </li>
                </ul>
            </div>
        </nav>
    </header>
);
export default Navbar;