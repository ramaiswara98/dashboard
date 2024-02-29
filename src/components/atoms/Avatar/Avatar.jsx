import React from 'react'

import './Avatar.css'
import User1 from '../../../assets/images/user1.png';

function Avatar() {
  return (
    <div>
        <img src={User1} className='avatar'/>
    </div>
  )
}

export default Avatar