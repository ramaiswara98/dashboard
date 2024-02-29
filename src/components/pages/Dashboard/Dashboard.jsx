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

function Dashboard() {
  return (
    <div className=''>
        <MainTemplate>
          <div>
            <div className='dashboard-header'>
              <div>
                <Label size={'regular-bold-left'}>Hello Jhon.D</Label>
                <Label size={'regular-left'}>View and control your finance here!</Label>
              </div>
              <div>
                <Icon icon={faMagnifyingGlass}/>
              </div>
            </div>
            <div className='dashboard-third-row'>
            <LastTransactionCard/>
            <LastTransactionCard/>
            </div>
            
          </div>
        </MainTemplate>
    </div>
  )
}

export default Dashboard