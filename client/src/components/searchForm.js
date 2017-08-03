
import React from 'react';

const SearchForm  = ({ searchTerm, onTextChange, onSearch }) => {
  return (
    <div className="search-form-wrapper">
      <form onSubmit={onSearch}>
        <div className="input-field">
          <input type="text" name="search" id="search" value={searchTerm} onChange={onTextChange} />
        </div>
        <button className="search" type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
