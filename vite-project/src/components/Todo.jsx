import React, { useState } from "react";

function Todo({ item, onUpdate }) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.tittle);

    function handleSubmit(e) {
      e.preventDefault();
    }
    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }
    function handleClickUpdate() {
      onUpdate(item.id, newValue);
      setIsEdit(false);
    }
    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="button" onClick={handleClickUpdate}>
          Update
        </button>
      </form>
    );
  }
  function TodoElement() {
    return (
      <div className="todoInfo">
        {item.tittle}
        <button onClick={() => setIsEdit(true)}>Edit</button>
        <button>Delete</button>
      </div>
    );
  }
  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}

export default Todo;
