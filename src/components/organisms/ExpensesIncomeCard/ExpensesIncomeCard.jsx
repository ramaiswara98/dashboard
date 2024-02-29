import React from 'react'

import './ExpensesIncomeCard.css'
import Card from '../../atoms/Card/Card'
import Label from '../../atoms/Label/Label'
import Bars from '../../atoms/Bars/Bars'

function ExpensesIncomeCard() {
  return (
    <Card>
        <p style={{color:'#000', fontSize:'16px', fontWeight:'bold', textAlign:'left'}}>Expenses And Income</p>
        <div className='EIC-Content'>
          <div>
            <Label size={"regular-bold"}>Expenses</Label>
            <Label size={"regular-bold"}>75%</Label>
            <Label size={"regular"}>5.653</Label>
          </div>
          <div className='EIC-divider'> 
            <div className='EIC-line'></div>
            <Label size={"regular"}>VS</Label>
            <div className='EIC-line'></div>
          </div>
          <div>
          <Label size={"regular-bold"}>Income</Label>
            <Label size={"regular-bold"}>40%</Label>
            <Label size={"regular"}>2.656</Label>
          </div>
        </div>
        <Bars left={"75%"} right={"40%"}/>
    </Card>
  )
}

export default ExpensesIncomeCard