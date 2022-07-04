import React from "react";
const TodoItem = (props) => (
  <li>
    <input
      type="checkbox"
      checked={props.todo.checked}
      onChange={() => props.handleChangeProps(props.todo.id)}
    />{" "}
    {props.todo.title}
  </li>
);

export default TodoItem;
