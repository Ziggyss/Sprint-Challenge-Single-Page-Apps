import React from "react";

export default function SearchForm(props) {
  const { onSearch, searchTerm } = props;
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        onSearch={onSearch}
        value={searchTerm}
        id="search" 
        type="text"
      />
    </div>
  );
}
