import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0); // To switch button between Edit and Go functionalities

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const editedTodo = todos.find((t) => t.id === editId);
      if (!editedTodo) {
        window.alert("Todo was deleted while editing");
      } else {
        const updatedTodos = todos.map((t) =>
          t.id === editedTodo.id
            ? { id: t.id, todo: todo }
            : { id: t.id, todo: t.todo }
        );
        setTodos(updatedTodos);
      }
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
        <TodoForm
          todo={todo}
          setTodo={setTodo}
          handleSubmit={handleSubmit}
          editId={editId}
        />
        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
