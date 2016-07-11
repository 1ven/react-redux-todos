import React, { PropTypes } from 'react';

function Todo({ id, title, completed, onClick, onRemoveClick }) {
  console.log('<Todo />');

  return (
    <div
      className="b-todo"
      style={{
        textDecoration: completed ?
          'line-through' :
          'none'
      }}
    >
      <span
        className="b-todo__text"
        onClick={() => onClick(id, !completed)}
      >
        {id + '. ' + title}
      </span>
      <a
        onClick={() => onRemoveClick(id)}
        style={{
          'float': 'right',
        }}
      >
        X
      </a>
    </div>
  );
}

export default Todo;
