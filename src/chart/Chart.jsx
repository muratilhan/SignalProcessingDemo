import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Chart = ({resData}) => {

  const options = {
    theme: "light2",
    animationEnabled: true,
    exportEnabled: true,
    title: {
        text: "Stock Movement"
    },
    axisY: {
        title: "Stock In Hand"
    },
    data: [{
        type: "stepLine",
        markerSize: 5,
        dataPoints: resData
    }]
};
  return (
    <CanvasJSChart options={options} />

  )
}

export default Chart