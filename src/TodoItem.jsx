import React from 'react';

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <li>
      <p>{todo.text}</p>
      <button onClick={() => onDelete(todo._id)}>Delete</button>
    </li>
  );
};
