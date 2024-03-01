import React from 'react'

import './BalanceCard.css'
import Card from '../../atoms/Card/Card'
import Label from '../../atoms/Label/Label'
import Dollar from '../../../assets/images/dollar.png'
import { Bar, Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js';
import Color from '../../atoms/color'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import BarChart from '../../atoms/BarChart/BarChart'

function BalanceCard({balance,chartData}) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    PointElement,
    LineElement,
    
  );
 

const options2 = {
  responsive:true,
  plugins:{
    legend:{
      display:false
    }
  },
  elements: {
    point:{
        radius: 0
    }
},
  scales: {
      x: {
          grid: {
            drawBorder: false,
            display:false
          },
          border:{
            display:false
          },
          ticks:{
            display:false
          },
      },
      y: {
        ticks:{
          display:false
        },
        border:{
          display:false
        },
        grid:{
          drawBorder: false,
          display:false
        }
      }
  }
}
const labelsLine = ['1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '13'];
  const dataLine = {
    labels:labelsLine,
    datasets:[
      {
        label: 'Dataset 1',
        data: [0,0,0.1,0.3,0.6,0.7,0.7, 0.6,0.1,0,0,0],
        backgroundColor: Color.blue,
        borderColor:Color.blue
      },
    ]
  }
  return (
    <Card>
      <div className='balance-container'>
      <div>
        <Label bold={true}>Balance statistic</Label>
      </div>
      <div className='balance-content'>
        <div className='balance-left'>
          <Label size={"30px"} bold={true}>${balance}</Label>
          <div className='total-balance-container'>
            <img src={Dollar} className='balance-dollar-img'/>
            <Label size={"12px"}>Your total Balance</Label>
          </div>
          <div>

          </div>
          <div className='balance-bottom'>
            <Line options={options2} data={dataLine} style={{width:'80%'}}/>
            <FontAwesomeIcon icon={faArrowAltCircleUp} style={{color:"#000"}}/>
            <Label size={"12px"}>6%</Label>
          </div>
          <Label size={"12px"} color={'var(--darkGray)'}>Always see your earnings updates</Label>
        </div>
        <div className='chart-bar'>
        {/* <Bar options={options} data={data} style={{width:'100%',height:'85%'}}/> */}
        <BarChart chartData={chartData}/>
        </div>
      </div>
      </div>
    </Card>
  )
}

export default BalanceCard