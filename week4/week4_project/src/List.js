import React, { Component } from 'react';

class App extends Component {
  mapList = toDoList => {
    return toDoList.map(
        item => (
            <li>
                task: {item.task}, date: {item.date}
            </li>
        )
    );      
  }

}


  render() {
    return (
      <div>
        <ul>
            {this.mapList(this.props.todoList)}
        </ul>
      </div>
    );
  }

export default List;
