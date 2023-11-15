import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts';
import '../App.css'
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Chart = ({resData}) => {

  const options = {
    theme: "light2",
    animationEnabled: true,
    exportEnabled: true,
    title: {
        text: "Signal Process"
    },
    axisY: {
      stripLines: [
        {
          value: 0, // Y ekseninde göstermek istediğimiz değer
          showOnTop: true,
          lineDashType: "solid", // Çizgi tipi
          lineThickness: 2, // Çizgi kalınlığı
          color: "black" // Çizgi rengi
        }
      ]
    },
    data: [{
        type: "stepLine",
        markerSize: 5,
        dataPoints: resData
    }]
};
  return (
    <div  className="chart">
      <CanvasJSChart  className="chart" options={options} />
    </div>

  )
}

export default Chart