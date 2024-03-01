import React from 'react'

import './CheckBox.css'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Label from '../Label/Label'
function CheckBox({checked,text}) {
  return (
    <div className='checkbox-container'>
      {checked?(
        <div className='checked'>
        <FontAwesomeIcon icon={faCheck} className='icon-check'/>
        </div>
      ):(
        <div className='unchecked'>
          <span></span>
        </div>
      )}
      
      <Label size={'regular'}>{text}</Label>
    </div>
  )
}

export default CheckBox