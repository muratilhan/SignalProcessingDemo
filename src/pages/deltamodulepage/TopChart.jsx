import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';


// const data = [
//     {
//       name: 'Page A',
//       uv: 2,
//     },
//     {
//       name: 'Page B',
//       uv: 3,
//     },
//     {
//       name: 'Page C',
//       uv: 2,
//     },
//     {
//       name: 'Page D',
//       uv: 6,
//     },
//     {
//       name: 'Page E',
//       uv: 1,
//     },
//     {
//       name: 'Page F',
//       uv: 4,
//     },
//     {
//       name: 'Page G',
//       uv: 3,
//     },
//   ];
const TopChart = ({res}) => {
  return (
    <ResponsiveContainer className="top" width="40%" height={300}>
      <LineChart
        width={500}
        height={300}
        data={res}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default TopChart