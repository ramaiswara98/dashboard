import React from 'react'
import './RightSide.css'
import ExpensesIncomeCard from '../../organisms/ExpensesIncomeCard/ExpensesIncomeCard'
import LatestSpendingCard from '../../organisms/LatestSpendingCard/LatestSpendingCard'
import GoPremiumCard from '../../organisms/GoPremiumCard/GoPremiumCard'

function RightSide() {
  return (
    <div
        className='rightside-container'
    >
        <ExpensesIncomeCard/>
        <LatestSpendingCard/>
        <GoPremiumCard/>
    </div>
  )
}

export default RightSide