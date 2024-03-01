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

function BalanceCard() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    PointElement,
    LineElement,
    
  );
  const labels = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
  const options = {
    responsive:true,
    scales: {
        x: {
            grid: {
              display:false
            }
        },
        y: {
          ticks:{
            // Include a dollar sign in the ticks
            callback: function(value, index, ticks) {
              return '$' + value;
          },
          stepSize:20,
          },
          grid:{
            display:false
          }
        }
    }
}

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
const labelsLine = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb','Oct', 'Nov', 'Dec', 'Jan', 'Feb','Dec', 'Jan', 'Feb'];
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
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [60,30,30,25,20,],
        backgroundColor: Color.blue,
      },
      {
        label: 'Dataset 2',
        data: [50,20,20,20,10,],
        backgroundColor: Color.lightPurple,
      },
    ],
  };
  return (
    <Card>
      <div className='balance-container'>
      <div>
        <Label bold={true}>Balance statistic</Label>
      </div>
      <div className='balance-content'>
        <div className='balance-left'>
          <Label size={"30px"} bold={true}>$564</Label>
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
        <Bar options={options} data={data} style={{width:'100%',height:'85%'}}/>
        </div>
      </div>
      </div>
    </Card>
  )
}

export default BalanceCard