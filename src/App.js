import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import React, { useState } from "react";

export const SelectedContext = React.createContext(null);

const App = () => {
  const [selectedNavbar, setSelectedNavbar] = useState("all");

  const getTodos = () => {
    return JSON.parse(localStorage.getItem("todos") || "[]");
  };

  const [todos, setTodos] = useState(getTodos());

  const addTodo = (title) => {
    const todos = getTodos();
    const todo = {
      id: Date.now(),
      title,
      done: false,
    };
    todos.unshift(todo);
    setTodos(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const doneTodo = (id) => {
    const todos = getTodos();
    const newTodos = todos.map((todo) => {
      if (todo.id === id) todo.done = !todo.done;
      return todo;
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const removeTodo = (id) => {
    const todos = getTodos();
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteDoneTodos = () => {
    const todos = getTodos();
    const newTodos = todos.filter((todo) => {
      return !todo.done;
    });

    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="App">
      <div className="Inner">
        <SelectedContext.Provider value={{ selectedNavbar, setSelectedNavbar }}>
          <Header />
          <Navbar />
          <AddTodo addTodo={addTodo} />
          <TodoList
            getTodos={getTodos}
            doneTodo={doneTodo}
            removeTodo={removeTodo}
            deleteDoneTodos={deleteDoneTodos}
          />
        </SelectedContext.Provider>
      </div>
    </div>
  );
};

export default App;
