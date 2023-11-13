import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';


const Chart = ({resData, hasSecondSignal}) => {

    console.log(resData)
  return (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={100}
          height={100}
          data={resData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
        dataKey="uv"
        fill="#ff0000"  // Bu çizginin içini boş yapar
        stroke="#8884d8"  // Çizgi rengi
        strokeWidth={2}  // Çizgi kalınlığı
      />
      {hasSecondSignal && (
        <Bar
          dataKey="pv"
          fill="#ff0000"  // Bu çizginin içini boş yapar
          stroke="#82ca9d"  // Çizgi rengi
        />) }
        </BarChart>
      </ResponsiveContainer>
  )
}

export default Chart