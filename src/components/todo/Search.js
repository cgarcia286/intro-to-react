import React from 'react';

import '../../static/css/todo/Search.css'

function TodoSearch({ searchValue, setSearchValue }) {
  return(
    <input
      className="TodoSearch"
      placeholder="Cortar cebolla"
      value={ searchValue }
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  )
}

export { TodoSearch };
