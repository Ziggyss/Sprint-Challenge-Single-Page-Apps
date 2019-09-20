import React from "react";
import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;
const StyledInput = styled.input`
  width: 250px;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
`;

export default function SearchForm(props) {
  const { onSearch, searchTerm } = props;

  return (
    <StyledSearch>
      <label htmlFor="search">Search For Your Favourite Characters</label>
      <StyledInput
        onChange={onSearch}
        searchTerm={searchTerm}
        id="search"
        type="text"
      />
    </StyledSearch>
  );
}
