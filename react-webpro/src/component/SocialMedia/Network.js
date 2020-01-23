import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import './Network.css'

const Network = () => (
  <body>
      <nav className="social">
            
            <ul>
                <li className="github">
                    <a href="/">GitHub
                    <i ><FontAwesomeIcon icon={faGithub} fa-lg/></i></a>
                </li>
            </ul>
            <ul>
            <li className="facebook">
                    <a href="/">Facebook
                    <i><FontAwesomeIcon icon={faFacebook} /></i> </a>
                </li>
            </ul>
            
           
        </nav>
  </body>
)
export default Network;