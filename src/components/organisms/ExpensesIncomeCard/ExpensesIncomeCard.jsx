import React from 'react'

import './ExpensesIncomeCard.css'
import Card from '../../atoms/Card/Card'
import Label from '../../atoms/Label/Label'
import Bars from '../../atoms/Bars/Bars'

function ExpensesIncomeCard() {
  return (
    <Card>
      <div className='expenses-income-card-container'>
        <Label bold={true} size={"16px"}>Expenses And Income</Label>
        <div className='EIC-Content'>
          <div>
            <Label size={"12px"} bold={true}>Expenses</Label>
            <Label size={"16px"} bold={true}>75%</Label>
            <Label size={"10px"} color={"var(--darkGray)"}>5.653</Label>
          </div>
          <div className='EIC-divider'> 
            <div className='EIC-line'></div>
            <Label size={"regular"}>VS</Label>
            <div className='EIC-line'></div>
          </div>
          <div>
          <Label size={"12px"} bold={true}>Income</Label>
            <Label size={"16px"} bold={true}>40%</Label>
            <Label size={"10px"} color={"var(--darkGray)"}>2.656</Label>
          </div>
        </div>
        <Bars left={"75%"} right={"40%"}/>
        </div>
    </Card>
  )
}

export default ExpensesIncomeCard