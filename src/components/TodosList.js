import React, { Component } from "react";

export class TodosList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => {
            return <li key={todo.id}>{todo.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default TodosList;
