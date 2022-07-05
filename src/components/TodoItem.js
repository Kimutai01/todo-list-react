// import React from "react";
import styles from "./TodoItem.module.css";
// const TodoItem = (props) => {
// const completedStyle = {
//   fontStyle: "italic",
//   color: "#595959",
//   opacity: 0.4,
//   textDecoration: "line-through",
// };
// handleEditing = () => {
//   console.log("edit mode activated");
// };
//   return (
// <li className={styles.item}>
//   <div onDoubleClick={this.handleEditing}>
//     <input
//       type="checkbox"
//       className={styles.checkbox}
//       checked={props.todo.completed}
//       onChange={() => props.handleChangeProps(props.todo.id)}
//     />
//     <button onClick={() => props.deletedTodoProps(props.todo.id)}>
//       Delete
//     </button>
//     <span style={props.todo.completed ? completedStyle : null}>
//       {props.todo.title}
//     </span>
//   </div>
// </li>
//   );
// };

// export default TodoItem;
import React, { Component } from "react";

export class TodoItem extends Component {
  state = {
    editing: false,
  };
  handleEditing = () => {
    console.log("edit mode activated");
    this.setState({
      editing: true,
    });
  };
  handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      this.setState({ editing: false });
    }
  };
  render() {
    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };
    const { completed, id, title } = this.props.todo;
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.deletedTodoProps(id)}>
            Delete
          </button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          type="text"
          value={title}
          style={editMode}
          className={styles.textInput}
          onChange={(e) => {
            this.props.setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

export default TodoItem;
