import React from 'react';
import './Searchbar.css';

function Searchbar({ keyword, onSearchChange }) {

  return (
    <div className="searchbar input-group">
      <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
      <input
        placeholder="Starbucks"
        type="text"
        className="form-control"
        value={keyword}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default Searchbar;
