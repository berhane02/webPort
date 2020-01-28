import React from 'react'
import facebook from '../Image/facebook-icon.svg'
import linkedIn from '../Image/linkedin-icon.svg'
import twitter from '../Image/twitter-3.svg'
import Instgram from '../Image/instagram-2-1.svg'
import GitHub from '../Image/github-icon.svg'
import './Network.css'

const Network = () => (
  <body>
      <nav className="social">
            
            <ul>
                <li className="github">
                    <a href="/">GitHub
                    <img src={GitHub} alt ="Y"/></a>
                </li>
            </ul>
            <ul>
            <li className="facebook">
                    <a href="/">Facebook
                    <img src={facebook} alt ="Y"/></a>
                </li>
            </ul>
            <ul>
                <li className="linkedIn">
                    <a href="/">LinkedIn
                    <img src={linkedIn} alt ="Y"/>
                    </a>
                    
                </li>
            </ul>
            <ul>
                <li className="twitter">
                    <a href="/">Twitter
                    <img src={twitter} alt ="Y"/></a>
                </li>
            </ul>
            <ul>
                <li className="instgram">
                    <a href="/">Instgram
                    <img src={Instgram} alt ="Y"/></a>
                </li>
            </ul>
            
           
        </nav>
  </body>
)
export default Network;