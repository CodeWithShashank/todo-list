import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0); // To switch button between Edit and Go functionalities

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const editedTodo = todos.find((t) => t.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editedTodo.id
          ? { id: t.id, todo: todo }
          : { t: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((to) => to.id !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = (to) => {
    setTodo(to.todo);
    setEditId(to.id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <form className="todoForm">
          <input
            type="text"
            className="input"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={(e) => handleSubmit(e)}>
            {editId ? "Edit" : "Go"}
          </button>
        </form>
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
      </div>
    </div>
  );
}

export default App;
