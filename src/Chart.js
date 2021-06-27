import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "2019-08-01",
    social: 4000,
    print: 2400,
    online: 2400,
    tv: 1000,
    radio: 5000
  },
  {
    name: "2019-08-05",
    social: 5000,
    print: 200,
    online: 200,
    tv: 1600,
    radio: 600
  },
  {
    name: "2019-08-09",
    social: 9000,
    print: 1400,
    online: 1400,
    tv: 800,
    radio: 200
  },
  {
    name: "2019-08-09",
    social: 1000,
    print: 1900,
    online: 2100,
    tv: 800,
    radio: 2000
  },
  {
    name: "2019-08-13",
    social: 4000,
    print: 200,
    online: 100,
    tv: 900,
    radio: 3000
  },
  {
    name: "2019-08-17",
    social: 200,
    print: 2400,
    online: 2300,
    tv: 800,
    radio: 1000
  },
  {
    name: "2019-08-21",
    social: 2400,
    print: 2400,
    online: 2200,
    tv: 1100,
    radio: 4500
  }
];

export default function Chart() {
  return (
    <BarChart
      width={700}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis label={{ value: 'timestamp per day', offset: -2, position: 'insideBottom' }} />
      <YAxis label={{ value: 'counts of records', offset: -10, angle: -90, position: 'insideLeft' }}/>
      <Tooltip />
      <Legend layout="vertical" align="right" verticalAlign= "top" iconType="circle" />
      <Bar dataKey="social" stackId="a" fill="#8884d8" />
      <Bar dataKey="print" stackId="a" fill="#82ca9d" />
      <Bar dataKey="online" stackId="a" fill="#ff6347" />
      <Bar dataKey="tv" stackId="a" fill="#cce435" />
      <Bar dataKey="radio" stackId="a" fill="#848eb4" />
    </BarChart>
  );
}
