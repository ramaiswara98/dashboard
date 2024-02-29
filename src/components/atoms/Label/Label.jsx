import React from 'react'

import './Label.css'

function Label({children, size,type}) {
  return (
    <>
    {size === "regular" &&(
      <p className='regular'>{children}</p>
    )}
     {size === "regular-left" &&(
      <p className='regular left'>{children}</p>
    )}
    {size === "regular-bold" &&(
      <p className='regular bold'>{children}</p>
    )}
    {size === "regular-bold-left" &&(
      <p className='regular bold left'>{children}</p>
    )}
    {size === "title" &&(
      <p className='title'>{children}</p>
    )}
    
    
    </>
  )
}

export default Label