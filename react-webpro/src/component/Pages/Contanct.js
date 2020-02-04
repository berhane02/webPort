import React, { Component } from 'react'

import Mail from '../Image/mail.svg'
import User from '../Image/user.svg'
import Next from '../Image/next.svg'
import facebook from '../Image/facebook-icon.svg'
import linkedIn from '../Image/linkedin-icon.svg'
import twitter from '../Image/twitter-3.svg'
import instgram from '../Image/instagram-2-1.svg'
import gitHub from '../Image/github-icon.svg'
import './contact.css'

class Contact extends Component{
    render(){
        return(
            <div className="contact-us" id="contact">
                <div className="title">
                     <h1> Get In Touch</h1>
                </div>
                 <div className="form">
                    <div className="form-items">
                        <input type="text" className="input" placeholder="UserName"></input>
                        <li className="fas"><img src={User}/></li>
                        
                    </div>
                    <div className="form-items">
                        <input type="text" className="input" placeholder="Email"></input>
                        <li className="fas"><img src={Mail}/></li>
                    </div>
                    <div className="form-items">
                        <textarea className="input message" cols="30" rows="10" placeholder=" Message ...."></textarea>
                    </div>
                 </div>
                 <div className="submit">
                     <button className="press"> submit </button>
                     <li className="fas"><img src={Next}/></li>
                 </div>
                 <div className="social-icons">
                 
                    <div className="facebook">
                        <a href="/">
                             <img src={facebook} alt ="Y"/>
                        </a>
                    </div>
                    <div className="github">
                         <a href="/">
                             <img src={gitHub} alt ="Y"/>
                        </a>
                    </div>
                    <div className="linkedin">
                         <a href="/">
                              <img src={linkedIn} alt ="Y"/>
                        </a>
                    </div>
                    <div className="instgram">
                         <a href="/">
                              <img src={instgram} alt ="Y"/>
                        </a>
                    </div>
                    
                    <div className="twitter">
                         <a href="/">
                              <img src={twitter} alt ="Y"/>
                        </a>
                    </div>
                </div>
            </div>
           
        )
    }
}
export default Contact;
