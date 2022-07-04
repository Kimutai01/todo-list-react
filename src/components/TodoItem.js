import React from "react";
const TodoItem = (props) => (
  <div>
    <li>
      <input
        type="checkbox"
        checked={props.todo.checked}
        onChange={() => props.handleChangeProps(props.todo.id)}
      />{" "}
      {props.todo.title}
    </li>
    <button onClick={() => props.deletedTodoProps(props.todo.id)}>
      Delete
    </button>
  </div>
);

export default TodoItem;
