import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      query: '',
      before: '',
      after: '',
      interval: ''
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
    alert(`${this.state.query} ${this.state.before} ${this.state.after} ${this.state.interval}`)
    event.preventDefault()
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
          <label>before(milliseconds)</label>
          <input type= 'text' 
                 value={before} 
                 onChange={this.handleBeforeChange}/>
        </div>
        <div>
          <label>after(milliseconds)</label>
          <input type= 'text' 
                 value={after} 
                 onChange={this.handleAfterChange}/>
        </div>
        <div>
          <label>interval(day)</label>
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