import React from 'react'

import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../atoms/Logo/Logo';
import Icon from '../../atoms/Icon/Icon';
import Navbar from '../../molecules/Navbar/Navbar';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Label from '../../atoms/Label/Label';
import LastTransactionCard from '../../organisms/LastTransactionCard/LastTransactionCard';
import BalanceCard from '../../organisms/BalanceCard/BalanceCard';
import CreditCard from '../../organisms/CreditCard/CreditCard';
import CheckBox from '../../atoms/CheckBox/CheckBox';
import ShoppingItems from '../../molecules/ShoppingItems/ShoppingItems';
import ShoppingList from '../../organisms/ShoppingList/ShoppingList';
import ShopListAndChatCard from '../../organisms/ShopListAndChatCard/ShopListAndChatCard';
import ChatBuble from '../../atoms/ChatBuble/ChatBuble';
import ChatItems from '../../molecules/ChatItems/ChatItems';
import ChatView from '../../organisms/ChatView/ChatView';

function Dashboard() {
  return (
    <div className=''>
        <MainTemplate>
          <div>
            <div className='dashboard-header'>
              <div>
                <Label size={'30px'} bold={true}>Hello Jhon.D</Label>
                <Label>View and control your finance here!</Label>
              </div>
              <div>
                <Icon icon={faMagnifyingGlass}/>
              </div>
            </div>
            <div className='dashboard-third-row'>
            <BalanceCard/>
            <CreditCard/>
            {/* <LastTransactionCard/> */}
            </div>
            <div className='dashboard-third-row'>
              <ShopListAndChatCard/>
            </div>
            <div className='dashboard-third-row'>
            <LastTransactionCard/>
            </div>
            
          </div>
        </MainTemplate>
    </div>
  )
}

export default Dashboard