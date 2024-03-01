import React from 'react'

import './GoPremiumCard.css'
import Card from '../../atoms/Card/Card'
import Label from '../../atoms/Label/Label'
import Crown from '../../../assets/images/crown.png'
import Button from '../../atoms/Button/Button'

function GoPremiumCard() {
  return (
    <Card>
        <Label bold={true}>Go to Premium</Label>
        <div className='go-premium-content'>
        <img src={Crown} className='go-premium-img'/>
        <Label size={"16px"} bold={true}>Need more features ?</Label>
        <Label color={"var(--darkGray)"}>Update your account to premium to get more features</Label>
        <div style={{width:"200px", marginTop:10, marginBottom:10}}>
        <Button size={"full"}>Get Now</Button>
        </div>
        
        </div>
    </Card>
  )
}

export default GoPremiumCard