import React, { Component } from 'react';
import MyList from "./MyList";
// import userInputs from "/userInputs"

class App extends Component {
  state = {
    toDoList: [],
    // tasks: [],
    // endTimes: [],
    // userTask: "",
    // userTime: ""
  }
  addToList = {date, task} => {
    this.setState({
      toDoList: this.state.toDoList.concat(date, task)
    });
  }


  render() {
    return (
      <div className="App">
        <Input addToList={this.addToList}/>
        <List toDoList={this.state.toDoList}/>
      </div>
    );
  }
}

export default App;
