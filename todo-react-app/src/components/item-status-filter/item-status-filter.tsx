import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({tabHeadings, setStatusFilter, statusFilter}: any): JSX.Element => {

  return (
    <div className="btn-group">
      {tabHeadings.map(({id, title}: any) => {
        const tabClassName = `btn ${statusFilter ===  title ? 'btn-info' : 'btn-outline-secondary'}`;
        console.log(id);
        return (
          <button key={id} type="button" className={tabClassName} onClick={() => setStatusFilter(title)}>{title}</button>
        )
      })}
    </div>
  );
};

export default ItemStatusFilter;
