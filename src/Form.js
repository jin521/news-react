import React, { Component } from 'react';
import axios from 'axios';
import Chart from './Chart'

export class Form extends Component {
  setData = this.props.setData;

  constructor(props) {
    super(props);
    
    this.state = {
      query: 'scott morrison',
      before: '2019-08-01',
      after: '2019-08-31',
      interval: '1'
    }
  }

  handleQueryChange = (event) => {
    this.setState({
      query: event.target.value
    }    
    )
  }

  handleBeforeChange = (event) => {
    this.setState({
      before: event.target.value
    }    
    )
  }

  handleAfterChange = (event) => {
    this.setState({
      after: event.target.value
    }    
    )
  }

  handleIntervalChange = (event) => {
    this.setState({
      interval: event.target.value
    }    
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // alert(`${this.state.query} ${this.state.before} ${this.state.after} ${this.state.interval}`)
    const { query, before, after, interval } = this.state

    const before_millisec = new Date(before).getTime()
    const after_millisec = new Date(after).getTime()

    axios.get(`api/v1/news?query=${query}&before=${before_millisec}&after=${after_millisec}&interval=${interval}`)
    .then(res => {
      // console.log(res.data);
      this.setData(res.data)
      // <Chart value={res.data} />
    })
    
  }
 
  render() {
    const { query, before, after, interval } = this.state

    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Search Term</label>
          <input type= 'text' 
                 value={query} 
                 onChange={this.handleQueryChange}/>
        </div>
        <div>
          <label>Before(milliseconds)</label>
          <input type= 'date' 
                 value={before} 
                 onChange={this.handleBeforeChange}/>
        </div>
        <div>
          <label>After(milliseconds)</label>
          <input type= 'date' 
                 value={after} 
                 onChange={this.handleAfterChange}/>
        </div>
        <div>
          <label>Interval(day)</label>
          <input type= 'text' 
                 value={interval} 
                 onChange={this.handleIntervalChange}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form