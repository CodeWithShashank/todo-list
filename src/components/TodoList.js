import React from "react";

const TodoList = ({ todos, handleEdit, handleDelete }) => {
  return (
    <ul className="allTodos">
      {todos.map((t) => {
        return (
          <li className="singleTodo" key={t.id}>
            <span className="todoText">{t.todo}</span>
            <button onClick={() => handleEdit(t)}>Edit</button>
            <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
