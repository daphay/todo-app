import React, { Component } from "react";
import axios from "axios";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";

class TodoContainer extends Component {
  state = {
    todos: [],
    show: false
  };

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
      show: !this.state.show
    });
  };

  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
         .then(response =>
          this.setState({
            todos: [
              ...this.state.todos.filter((todo) => {
                return todo.id !== id;
              }),
            ],
          })
          )
  };

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title: title,
      completed: false,
    })
    .then(response => this.setState({
      todos: [...this.state.todos, response.data],
    }))
    .catch(err => console.log("error:", err)) 
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => this.setState({ todos: response.data }));
  }

  render() {
    return (
      <div className="container">
        <Header headerText={this.state.show} />
        <InputTodo addTodoProp={this.addTodo} />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.deleteTodo}
        />
      </div>
    );
  }
}

export default TodoContainer;
