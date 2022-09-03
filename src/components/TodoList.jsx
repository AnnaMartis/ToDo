import React from "react";
import "../css/TodoList.css";
import { SelectedContext } from "../App";
import { useContext } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ getTodos, doneTodo, removeTodo, deleteDoneTodos }) => {
  const { selectedNavbar } = useContext(SelectedContext);

  let todoList;

  if (selectedNavbar === "all") {
    todoList = getTodos();
  } else if (selectedNavbar === "active") {
    todoList = getTodos().filter((el) => {
      return !el.done;
    });
  } else {
    todoList = getTodos().filter((el) => {
      return el.done;
    });
  }

  const elements = todoList.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        doneTodo={doneTodo}
        removeTodo={removeTodo}
      />
    );
  });

  return (
    <div className="TodoList">
      <div className="Todos">{elements}</div>
      <div
        className={
          selectedNavbar === "completed" ? "DeleteAll" : "DeleteAll hide"
        }
      >
        <div className="LefrPart"></div>
        <div className="RightPart">
          <button onClick={deleteDoneTodos}>
            <i className="fas fa-trash"></i>
            delete all
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
