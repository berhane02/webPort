import React, { Component } from 'react'
//import {Container } from 'react-bootstrap'
//import {Jumbotron } from 'react-bootstrap'
import Wave from '../Image/wave.png'
import './About.css'

class About extends Component{
    render(){
        return(
            <section className="container" id="about">
                <div className="head">
                    <h1>Hello! </h1>
                    <img className="wave" src={Wave} alt="hand wave"/>
                </div>
               
                <h2>I'm Yemane Berhane</h2>
                <h3> I code to Solve problem</h3>
                <div className="intro">
                     <p>
                        Thank you for visition my website
                        I'm a software engineer based in Columbus, OH 
                        who enjoys programming to solve real world problem and enjoys building website. 
                         I graduated from The Ohio State University with computer science and engineering. 
                     </p> 
                    
                </div>
                <div className="project-list">
                    <div className="project-1">
                        <li className="project">
                            <a> AStar Algorithm </a>
                        </li>
                    </div>
                    <div className="project-2">
                        <li className="project">
                                <a> Bug tracker</a>
                        </li>
                    </div>
                    <div className="project-3">
                        <li className="project">
                                <a>C# project</a>  
                        </li>
                    </div>
                </div>
        
            </section>
            
        );
    }
}
export default About;