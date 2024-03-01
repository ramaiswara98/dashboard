import React from 'react'

import './ShoppingList.css'
import Label from '../../atoms/Label/Label'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons'
import ShoppingItems from '../../molecules/ShoppingItems/ShoppingItems'

function ShoppingList() {
  return (
    <div className='shopping-list-container'>
        <Label bold={true} size={"16px"}>List of items to buy</Label>
        <div className='shopping-list-first-row'>
            <div>
                <Label bold={true} size={"16px"}>02:00</Label>
                <Label size={"12px"} color={"var(--darkGray)"}>Sat, August 12</Label>
            </div>
            <div>
                <FontAwesomeIcon icon={faChevronRight} className='shopping-list-right-icon'/>
            </div>
            <div>
                <Label bold={true} size={"16px"}>02:00</Label>
                <Label size={"12px"} color={"var(--darkGray)"}>Sat, August 12</Label>
            </div>
        </div>
        <div className='shopping-list-second-row'>
            <div className='shopping-list-count'>
                <Label color={"var(--darkGray)"}>0/3 </Label>
                <Label size={"regular-bold"}>Shopping List</Label>
            </div>
            <div className='shopping-list-count'>
                <FontAwesomeIcon icon={faPlus} className='shopping-list-plus-icon'/>
                <Label size={"regular-bold"}>Add an Item</Label>
            </div>
        </div>
        <div className='shopping-item-list'>
            <ShoppingItems/>
            <ShoppingItems/>
            <ShoppingItems/>
            <ShoppingItems/>
        </div>
    </div>
  )
}

export default ShoppingList