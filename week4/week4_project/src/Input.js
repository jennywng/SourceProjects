import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from '@material-ui/core/Button';

class Input extends Component {
  state = {
    date: "",
    task: ""
  };
  render() {
    return (
      <div style={{ display: "flex" }}>
        <input
          value={this.state.task}
          type="text"
          placeholder="Enter a task"
          onChange={e => {
            this.setState({ task: e.target.value });
          }}
        />
        <input
          value={this.state.date}
          type="text"
          placeholder="Enter a completion date"
          onChange={e => {
            this.setState({ date: e.target.value });
          }}
        />
        <Button variant = "contained" color="primary"
          onClick={() => this.props.addToList(this.state.date, this.state.task)}
        >
          SUBMIT
        </Button>
      </div>
    );
  }
}

export default Input;