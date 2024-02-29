import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import './Icon.css'

function Icon({icon,active}) {
  return (
    <div className={active?' active icon-container':'icon-container'}>
        <FontAwesomeIcon icon={icon} className= {active ?'ic-active icons':'icons'} />
    </div>
  )
}

export default Icon