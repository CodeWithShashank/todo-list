import React from "react";

const TodoForm = ({ todo, setTodo, handleSubmit, editId }) => {
  return (
    <form className="todoForm">
      <input
        type="text"
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={(e) => handleSubmit(e)}>{editId ? "Edit" : "Go"}</button>
    </form>
  );
};

export default TodoForm;
