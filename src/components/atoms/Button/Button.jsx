import React from 'react'

import './Button.css'
function Button({children}) {
  return (
    <div
        className='button-container'
    >{children}</div>
  )
}

export default Button