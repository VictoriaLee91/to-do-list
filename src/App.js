import React, { Component } from 'react';
import TodoForm from './TodoForm';
import './App.css';
import TodoItem from './TodoItem';
class App extends Component {

  state = {
    todos: []
  };
  addTask = text => {
    this.setState({
      todos: [
        { id: this.state.todos.length + 1, task: text },
        ...this.state.todos
      ]
    })
  }
  clearTodo = id => {
    const toKeep = this.state.todos.filter(item => item.id !== id);
    this.setState({
      todos: [...toKeep]
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Add Something</h1>
        <ul>
          {
            this.state.todos.map(todo => <TodoItem clearTodo={this.clearTodo} item={todo} key={todo.id} />)
          }
        </ul>

        <TodoForm addItem={this.addTask} />

      </div>
    );
  }
}
export default App;