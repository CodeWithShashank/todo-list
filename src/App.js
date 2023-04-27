import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((to) => to.id !== id);
    setTodos(updatedTodos);
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
          <button onClick={(e) => handleSubmit(e)}>Go</button>
        </form>
        <ul className="allTodos">
          {todos.map((t) => {
            return (
              <li className="singleTodo" key={t.id}>
                <span className="todoText">{t.todo}</span>
                <button>Edit</button>
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
