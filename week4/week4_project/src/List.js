import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

class List extends Component {
  state = {
    checked: [0]
  };

  handleToggle = value => () => {
    const {checked} = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({checked: newChecked,});
  };

  mapTodoList = todoList => {
    return todoList.map(item => (
      <li>
        task: {item.task}, due date: {item.date}
      </li>
    ));
  };
  render() {
    return (
      <div>
        <List>
          {this.mapTodoList(value => (
            <ListItem key = {value} role = {undefined} dense button onClick={this.handleToggle(value)}>
              <Checkbox
                checked={this.state.checked.indexOf(value) !== -1}
                tabIndex = {-1}
                disableRipple
              />
              <ListItemtext primary={`Line item ${value + 1}`}/>
            </ListItem>
          )};
        </List>

        <ul>{this.mapTodoList(this.props.todoList)}</ul>
      </div>
    );
  }
}

export default List;