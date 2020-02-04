import React, { Component } from 'react'
import Logo from '../Image/facebook-icon.svg'
import './Work.css'
class Work extends Component {
    render(){
        return(
          
            <section className="container" id="work">
                <div id="left">
                    <p> Work exprince</p>
                </div>
                <div id="right">
                    <ul className="work">
                        <li className="A">
                            <img src= {Logo} alt="Y"/>
                            <span>
                                <strong> FrondEnd Developer </strong>
                                <p>     Developed dynamic and interactive website for Online Education and Teaching Courses
                                        Developed the backend of an application using Python Django and MySQL 
                                        Fixed bugs from existing website and implemented enhancements that significantly improve web functionality and speed. 
                                </p>
                            </span>
                        </li>
                        <li className="A">
                            <img src= {Logo} alt="Y"/>
                            <span>
                                <strong> FrondEnd Developer </strong>
                                <p>     Developed dynamic and interactive website for Online Education and Teaching Courses
                                        Developed the backend of an application using Python Django and MySQL 
                                        Fixed bugs from existing website and implemented enhancements that significantly improve web functionality and speed. 
                                </p>
                            </span>
                        </li>
                        <li className="A">
                            <img src= {Logo} alt="Y"/>
                            <span>
                                <strong> FrondEnd Developer </strong>
                                <p>     Developed dynamic and interactive website for Online Education and Teaching Courses
                                        Developed the backend of an application using Python Django and MySQL 
                                        Fixed bugs from existing website and implemented enhancements that significantly improve web functionality and speed. 
                                </p>
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
               
           
        )
    }
}
export default Work;