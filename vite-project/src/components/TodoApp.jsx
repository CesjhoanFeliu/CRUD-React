import React, { useState } from "react";
//rcfe snippet component
function TodoApp() {
  const [tittle, setTitle] = useState("");
  function handleClick(e) {
    e.preventDefault();
    setTitle("Marco"); //Evitamos el comportamiento por defecto del  type="submit" del input
  }
  return (
    <div className="todoContainer">
      <form action="" className="todoCreateForm">
        <input className="todoInput" value={tittle} />
        <input
          onClick={handleClick}
          type="submit"
          value="Create todo"
          className="buttonCreate"
        />
      </form>
    </div>
  );
}

export default TodoApp;
