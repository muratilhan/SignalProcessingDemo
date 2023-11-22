import React, { useEffect, useState } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

var data = [{}]


const PCMchart = ({numbers}) => {

  useEffect(()=>{

    for(let i = 0; i < numbers.length; i++){
      data[i]={
            x: i+1,
            y: numbers[i],
        }
    }
  },[numbers])

  console.log(data)

  return (
    <ResponsiveContainer width="50%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x"  name="stature" />
        <YAxis type="number" dataKey="y"  name="weight" unit="D" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={data} fill="#000">
          <LabelList dataKey="y" />
        </Scatter>
        <ReferenceLine y={0} stroke="black" cursor="3 3" strokeWidth={1} />

      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default PCMchart;
