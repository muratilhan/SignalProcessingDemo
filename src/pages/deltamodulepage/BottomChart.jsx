import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BottomChart = ({res}) => {

    
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
        dataPoints: res
    }]
};
  return (
    <div  className="bottom"><CanvasJSChart  options={options} /></div>
  )
}

export default BottomChart