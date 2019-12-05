import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { tasks } from "./data";
import TaskList from "./components/TodoComponents/TaskList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks
    };
  }

  toggleItem = itemId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (itemId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  // addItem = itemText => {
  //   const newItem = {
  //     name: itemText,
  //     purchased: false,
  //     id: Date.now()
  //   };

  //   this.setState({
  //     groceries: [...this.state.groceries, newItem]
  //   });
  // };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Task List</h1>
          {/* <ListForm addItem={this.addItem} /> */}
        </div>
        <TaskList
          tasks={this.state.tasks}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
};

export default App;
