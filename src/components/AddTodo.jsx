import React from "react";
import "../css/AddTodo.css";
import { SelectedContext } from "../App";
import { useContext, useState } from "react";

const AddTodo = ({ addTodo }) => {
  const { selectedNavbar } = useContext(SelectedContext);

  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <div
      className={selectedNavbar === "completed" ? "AddTodo hide" : "AddTodo"}
    >
      <form onSubmit={submitHandler}>
        <input
          name="name"
          placeholder="add details"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
