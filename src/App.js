import React, { useState } from "react";
import "./styles.css";
import Todo from "./Todo";

const App = () => {
  const [label, setLabel] = useState("");
  const [todos, setTodos] = useState([]);
  
  const handleChange = e => {
    setLabel(e.target.value);
  };

  const addTodo = () => {
    if (label !== "") {
      setTodos([...todos, { label: label, done: false }]);
      setLabel("");
    }
    document.getElementById("todo-input").focus();
  };

  const deleteTodo = index => {
    setTodos([...todos.filter((e, i) => i !== index)]);
  };

  return (
    <div className="App">
      <h1>Todo List:</h1>
      <input
        placeholder="New todo"
        value={label}
        id="todo-input"
        onChange={handleChange}
      />
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo, i) => {
        return (
          <Todo
            index={i}
            done={todo.done}
            label={todo.label}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
}

export default App;
