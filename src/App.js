import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["item 1", "item 2", "item 3"],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const todo = event.target.elements.todo.value;
    this.setState((prevState) => {
      return { todos: [...prevState.todos, todo] };
    });
  };

  render() {
    return (
      <>
        <TodoCount todos={this.state.todos} />
        <TodoList todos={this.state.todos} />
        <AddTodo handleSubmit={this.handleSubmit} />
      </>
    );
  }
}

class AddTodo extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" id="todo" />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

class TodoCount extends React.Component {
  render() {
    return <div>Total Todos: {this.props.todos.length}</div>;
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    );
  }
}
