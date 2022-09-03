import React from "react";
import { useContext } from "react";
import { SelectedContext } from "../App";

const TodoItem = ({ todo, doneTodo, removeTodo }) => {
  const { selectedNavbar } = useContext(SelectedContext);

  return (
    <div className="Todo">
      <div className={todo.done ? "TodoPart done" : "TodoPart"}>
        <input
          type="checkbox"
          onChange={() => doneTodo(todo.id)}
          defaultChecked={todo.done}
        />
        <span>{todo.title}</span>
      </div>
      <div
        className={
          selectedNavbar === "completed" ? "RemoveTodo" : "RemoveTodo hide"
        }
      >
        <i className="fas fa-trash" onClick={() => removeTodo(todo.id)}></i>
      </div>
    </div>
  );
};

export default TodoItem;
