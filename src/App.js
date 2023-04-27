import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <form className="todoForm">
          <input type="text" className="input" />
          <button>Go</button>
        </form>
        <ul className="allTodos">
          <li className="singleTodo">
            <span className="todoText">Learn React</span>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
