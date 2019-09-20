import React from "react";

export default function SearchForm(props) {
  const { onSearch, searchTerm } = props;

  return (
    <div>
      <label htmlFor="search">Search For Your Favourite Characters</label>
      <input
        onChange={onSearch}
        searchTerm={searchTerm}
        id="search" 
        type="text"
      />
    </div>
  );
}
