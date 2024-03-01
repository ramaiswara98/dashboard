import React from 'react'

import './Avatar.css'
import User1 from '../../../assets/images/user1.png';

function Avatar({src}) {
  return (
    <div>
        <img src={src?src:User1} className='avatar'/>
    </div>
  )
}

export default Avatar