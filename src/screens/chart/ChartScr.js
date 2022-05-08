import React, { useEffect } from 'react'
import './ChartScr.css'
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const options = {
  maintainAspectRatio: false ,
  plugins: {
      legend: {
          display: false,
          align: 'start',
          labels: {
              usePointStyle: true,
            }
      },
      tooltip: {
          displayColors: false,
          yAlign: 'bottom',
          padding: 20,
      },
  },

  scales: {
    x: {
      grid: {
        display: false,
        drawTicks: true,
      },
    },
    y: {
      type: 'linear',
      grid: {
        color: 'gray',
        drawBorder: false,
      },
      axis: 'y',
      display: true,
      position: 'left',
    },

  }
};

const ChartScr = ({setToggle}) => {

  return (
    <div className='ChartCont' onClick={() => setToggle(false)}>
        <h1>
            코딩 실력 향상 예상 차트
        </h1>
        <div className='chartBx'>

            <Line 
              className='chartmain'
              data={{
              labels: ['2020년', '2021년', '2022년', '2023년', '2024년', '2025년', '2026년'],
              datasets: [
                  {
                      label: '코딩실력 성장예상',
                      data: [10, 20, 30, 50, 70, 90, 100],
                      fill: false,
                      borderColor: "green",
                  },
              ]}} 
              options={options}
          />
        </div>

    </div>
  )
}

export default ChartScr