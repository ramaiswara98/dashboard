import React from 'react'

import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../atoms/Logo/Logo';
import Icon from '../../atoms/Icon/Icon';
import Navbar from '../../molecules/Navbar/Navbar';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Label from '../../atoms/Label/Label';

function Dashboard() {
  return (
    <div className=''>
        <MainTemplate>
          <div>
            <div>
              <Label size={'regular-bold-left'}>Hello Jhon.D</Label>
            </div>
          </div>
        </MainTemplate>
    </div>
  )
}

export default Dashboard