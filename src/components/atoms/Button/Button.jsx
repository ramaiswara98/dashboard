import React from 'react'

import './Button.css'
function Button({size,children}) {
  return (
    <>
    {size === "small" && (
      <div
          className='button-container small'
      >{children}</div>
    )}
    {size === "full" && (
      <div
          className='button-container full'
      >{children}</div>
      )}
    </>
    
  )
}

export default Button