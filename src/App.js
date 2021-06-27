import React, { Component, useState } from 'react'
import './App.css';
import Form from './Form'
import Chart from './Chart'

function App() {
  const [data, setData] = useState([])

  return (
    <div className="App">
      <Form setData={setData}/>
      { data.length ? <Chart data={data}/> : 'please enter'}
    </div>
  );
}

export default App;
