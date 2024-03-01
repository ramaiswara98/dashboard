import React, { useState } from 'react'

import './LastTransactionCard.css'
import Card from '../../atoms/Card/Card'
import Label from '../../atoms/Label/Label'
import LatestSpendingItems from '../../molecules/LatestSpendingItems/LatestSpendingItems'
import TransactionItem from '../../molecules/TransactionItems/TransactionItem'
import User3 from '../../../assets/images/user3.png'
import User4 from '../../../assets/images/user4.png'
import User5 from '../../../assets/images/user5.png'
import { dummy } from '../../../utils/DummyData'

function LastTransactionCard() {
  const listTransaction = dummy.listTransaction;
  const [selected,setSelected] = useState('new');
  const [selectedTransaction, setSelectedTransaction] = useState(listTransaction.slice(0,3));

  const getSelectedTransaction = (state) => {
    if(state === "new") {
      const transactionList = listTransaction;
      transactionList.sort((a, b) => new Date(b.date) - new Date(a.date));
      const newTransaction = transactionList.slice(0,3);
      setSelectedTransaction(newTransaction)
    }else{
      const transactionList = listTransaction;
      transactionList.sort((a, b) => new Date(a.date) - new Date(b.date));
      const oldTransaction = transactionList.slice(0,3);
      setSelectedTransaction(oldTransaction)
    }
  }


  const onChooserClicked = (state) => {
    setSelected(state);
    getSelectedTransaction(state);
  }
  return (
   <Card>
    <div className='latest-transaction-card-container'>
      <div className='last-transaction-card-header'>
      <Label bold={true}>Last Transactions</Label>
      <div className='last-transaction-card-chooser'>
        <div className={selected === "new" ?' selected-transaction chooser':'chooser'} onClick={() => {onChooserClicked("new")}}>
          <Label  >Newest</Label>
        </div>
        <div className={selected === "old" ?' selected-transaction chooser':'chooser'} onClick={() => {onChooserClicked("old")}}>
          <Label  >Oldest</Label>
        </div>
      </div>
      </div>
      <div>
        {selectedTransaction.map((transaction,index)=>{
          return(
            <TransactionItem transaction={transaction} key={index}/>
          )
        })}
      </div>
    </div>
   </Card>
  )
}

export default LastTransactionCard