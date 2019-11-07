import React from 'react';

function Todo({ todo, dispatch }) {
  const toggleCompleted = () => {
    dispatch({
      type: 'TOGGLE_COMPLETED',
      payload: todo.id,
    });
  };

  console.log(todo);
  return (
    <>
      <li
        onClick={toggleCompleted}
        className={`todo ${todo.completed ? 'completed' : ''}`}
        style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
        {todo.item}
      </li>
    </>
  );
}

export default Todo;
