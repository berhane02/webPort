import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { falinkedin } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'

const Network = () => (
  <div>
    <ul>
        <li>
             <a href="/"><i class="fa fa-linedin"></i></a>
        </li>
        <li>
             <a href="/"><FontAwesomeIcon icon={faGithub} /></a>
        </li>
        <li>
             <a href="/"><FontAwesomeIcon icon={faFacebook} /></a>
        </li>
    </ul>
  </div>
)
export default Network;