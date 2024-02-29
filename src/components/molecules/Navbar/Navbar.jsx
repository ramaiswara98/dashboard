import React from 'react'

import './Navbar.css'
import Icon from '../../atoms/Icon/Icon'
import { faBell, faClock, faGear, faHome, faUserGroup, faWallet } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className='navBar-container'>
        <Icon active={true} icon={faHome}/>
        <Icon icon={faBell}/>
        <Icon icon={faClock}/>
        <Icon icon={faUserGroup}/>
        <Icon icon={faWallet}/>
        <Icon icon={faGear}/>
    </div>
  )
}

export default Navbar