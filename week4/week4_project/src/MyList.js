import React, { Component } from 'react';

class App extends Component {
  render() {
    const tasks = this.props.tasks;
    return (
      <div>
        <ul>
            {this.tasks}
        </ul>
      </div>
    );
  }
}

export default MyList;
