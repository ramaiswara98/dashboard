import React from 'react'

import './LastTransactionCard.css'
import Card from '../../atoms/Card/Card'
import Label from '../../atoms/Label/Label'
import LatestSpendingItems from '../../molecules/LatestSpendingItems/LatestSpendingItems'
import TransactionItem from '../../molecules/TransactionItems/TransactionItem'

function LastTransactionCard() {
  return (
   <Card>
    <div className='last-transaction-card-header'>
    <Label size={"regular-bold"}>Last Transactions</Label>
    <div className='last-transaction-card-chooser'>
        <Label size={"regular"} className={'selected'}>Newest</Label>
        <Label size={"regular"}>Oldest</Label>
    </div>
    </div>
    <div>
        <TransactionItem/>
        <TransactionItem/>
        <TransactionItem/>
    </div>
   </Card>
  )
}

export default LastTransactionCard