import React, { Component } from 'react'
//import {Container } from 'react-bootstrap'
import {Jumbotron } from 'react-bootstrap'

class About extends Component{
    render(){
        return(
            <Jumbotron>
                <div className="jumbotron">
                    <h1 className="display-4">
                        Simple 
                    </h1>
                    <p className="lead">
                        Hi thank you for visition my web site 
                        Hello! I'm Yemane, a software engineer based in Columbus, OH who enjoys programming to solve real wrold problem and enjoys building website. 
                        I graduated from The Ohio State University computer science and engineering. 

                        Here are a few of technologies I'have been wroking with recently

                    </p>
                </div>
                <div className= "row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body text-center">
                                <h5 className="card-title"> Project 01 </h5>
                                <p className="card-text"> Heart Project </p>
                                <a href ="#" className="card-link"> Another link</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body text-center">
                                <h5 className="card-title"> Project 01 </h5>
                                <p className="card-text"> Heart Project </p>
                                <a href ="#" className="card-link"> Another link</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body text-center">
                                <h5 className="card-title"> Project 01 </h5>
                                <p className="card-text"> Heart Project </p>
                                <a href ="#" className="card-link"> Another link</a>
                            </div>
                        </div>
                    </div>
                </div>
         </Jumbotron>
        );
    }
}
export default About;