import React, { useState } from "react";
import Todo from "./Todo";
//rcfe snippet component
function TodoApp() {
  const [tittle, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  //
  function handleChange(e) {
    const value = e.target.value;
    setTitle(value);
  }
  //
  //
  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      tittle: tittle,
      completed: false,
    };
    const temp = [...todos];
    temp.unshift(newTodo);
    setTodos(temp);
  }
  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  }
  return (
    <div className="todoContainer">
      <form action="" className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" value={tittle} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create todo"
          className="buttonCreate"
        />
        {tittle}
      </form>
      <div className="todosContainer">
        {todos.map((item) => (
          <Todo key={item.id} item={item} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
