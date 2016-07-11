import React, { PropTypes } from 'react';

function Filters({ filters = [], onFilterClick }) {
  console.log('<Filters />');
  return (
    <div className="b-visibility-filter">
      {filters.map((f, i) =>
        <a
          key={i}
          className={
            'b-visibility-filter__link' + (f.active ? ' b-visibility-filter__link_active' : '')
          }
          onClick={() => onFilterClick(f.value)}
        >{f.title}</a>
      )}
    </div>
  );
}

export default Filters;
