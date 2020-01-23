import React, { Component } from 'react'
import './contact.css'

class Contact extends Component{
    render(){
        return(
            <div className="contact-us">
                <div className="title">
                     <h1> Contact us</h1>
                </div>
                 <div className="form">
                    <div className="form-items">
                        <input type="text" className="input" placeholder="UserName"></input>
                    </div>
                    <div className="form-items">
                        <input type="text" className="input" placeholder="Email"></input>
                    </div>
                    <div className="form-items">
                        <textarea className="input message" cols="30" rows="10" placeholder=" Message ...."></textarea>
                    </div>
                 </div>

                <div className="btn">
                    Submit
                </div>
            </div>
           
        )
    }
}
export default Contact;
