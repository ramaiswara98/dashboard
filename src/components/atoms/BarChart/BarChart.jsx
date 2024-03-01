import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  PointElement,
  LineElement,
} from 'chart.js';
import Color from '../color';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  PointElement,
  LineElement,
  
);

function BarChart({chartData}) {
  const labels = chartData.labels;

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: chartData.data1,
        backgroundColor: Color.blue,
      },
      {
        label: 'Dataset 2',
        data: chartData.data2,
        backgroundColor: Color.lightPurple,
      },
    ],
  };

  
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
  return (
    <Bar options={options} data={data} style={{width:'100%',height:'85%'}}/>
  )
}

export default BarChart