import React from 'react'

import './LatestSpendingCard.css'
import Card from '../../atoms/Card/Card'
import Label from '../../atoms/Label/Label'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import LatestSpendingItems from '../../molecules/LatestSpendingItems/LatestSpendingItems'
import Shop from '../../../assets/images/shop.png';
import Hospital from '../../../assets/images/hospital.png';
import Ticket from '../../../assets/images/ticket.png'

function LatestSpendingCard() {
  return (
    <Card>
        <div className='LatestSpendingCard-Title'>
            <Label size={"regular-bold"}>Latest Spending</Label>
            <FontAwesomeIcon icon={faEllipsisVertical} style={{color:'#000'}}/>
        </div>
        <div>
          <LatestSpendingItems img={Shop} text="Online Shop" date="May 30, 2024 at 08:00 pm"/>
          <LatestSpendingItems img={Hospital} text="Pay the hospital" date="May 28, 2024 at 10:00 pm"/>
          <LatestSpendingItems img={Ticket} text="Tickets" date="May 10, 2024 at 12:00 pm"/>
        </div>
        <div>
          <Label size={"regular-bold"}>View All <FontAwesomeIcon icon={faArrowRight}/></Label>
        </div>
        
    </Card>
  )
}

export default LatestSpendingCard