import React from 'react';
import TodoContainer from '../containers/TodoContainer';

function Todos({
  ids = [],
}) {
  return (
    <div className="b-list">
      <div className="b-list__items">
        {ids.map(id =>
          <TodoContainer
            key={id}
            id={id}
          />
        )}
      </div>
    </div>
  );
}

export default Todos;
