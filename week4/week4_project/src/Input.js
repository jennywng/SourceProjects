import React, { Component } from 'react';

class App extends Component {
  state = {
    task: "",
    state: ""
  }

  render() {
    return (
      <div className="App">
        <input 
            value = {this.state.task}
            type="text"
            placeholder="Please enter a task"
            onChange={
                e => this.setState({task: e.target.value})
            }
        />
        <input 
            value = {this.state.date}
            type="text"
            placeholder="Please enter a date"
            onChange={
                e => this.setState({date: e.target.value})
            }
        />

        <button>
            onClick={() => this.props.addToList(this.state.date, this.state.task)}
            Submit
        </button>

      </div>
    );
  }
}

export default Input;
