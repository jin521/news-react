import React, { Component, useState } from 'react'
import './App.css';
import Form from './Form'
import Chart from './Chart'

function App() {
  const [data, setData] = useState([])

  return (
    <div className="App">
      <div className="form-area">
        <Form setData={setData}/>
      </div>
      <div className="center">
          { data.length ? <Chart  data={data}/> : 'Please enter search criteria and press submit'}
      </div>
    </div>
  );
}

export default App;
