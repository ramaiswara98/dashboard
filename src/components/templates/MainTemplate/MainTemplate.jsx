import React from 'react'

import './MainTemplate.css'
import LeftSide from '../LeftSide/LeftSide'
import RightSide from '../RightSide/RightSide'
import MiddleSide from '../MiddleSide/MiddleSide'

function MainTemplate({children}) {
  return (
    <div className='main-template-container'>
        <LeftSide/>
        <MiddleSide>{children}</MiddleSide>
        <RightSide/>
    </div>
  )
}

export default MainTemplate