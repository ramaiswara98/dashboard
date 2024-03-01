import React from 'react'

import './Logo.css'
function Logo({color}) {
  const style={
    color:color||"black"
  }
  return (
    <div>
        <p className='logo-text' style={style}>S.</p>
    </div>
  )
}

export default Logo