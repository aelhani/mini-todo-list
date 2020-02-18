import React from "react";

const Todo = ({ label, done, index, deleteTodo }) => {
  return (
    <>
      <div
        key={index}
        style={{
          marginTop: 20,
          textDecoration: done ? "line-through" : ""
        }}
        data-testid={`todo-${index}`}
        aria-checked={done}
      >
        {`- ${label}`}
      </div>
      <button onClick={() => deleteTodo(index)}>done</button>
    </>
  );
};

export default Todo;