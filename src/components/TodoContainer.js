import React, { useState, useEffect } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import "../App.css";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  const deleteTodo = (id) => {
    console.log("Deleted", id);
    const { todos } = this.state;
    const deletedTodo = todos
      .filter((todo) => {
        return todo.id !== id;
      })
      .map((todo, i) => {
        const td = { ...todo, id: i + 1 };
        return td;
      });
    setTodos([...deletedTodo]);
  };
  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4,
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ todos: data }));
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.todos !== this.state.todos) {
  //     const temp = JSON.stringify(this.state.todos);
  //     localStorage.setItem("todos", temp);
  //   }
  // }
  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          deletedTodoProps={deleteTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};
export default TodoContainer;
