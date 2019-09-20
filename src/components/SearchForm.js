import React, { useState } from "react";

export default function Search(props) {
  const [results, setResults] = useState("");
  const onSubmit = event => {
    setResults(event.target.value);
  };
  const resetFields = () => {
    setResults("");
  };

  const callSearch = event => {
    event.preventDefault();
    props.search(results);
    resetFields();
  };
  return (
    <section>
      <form className="search-form">
        <input value={results} onChange={onSubmit} type="text" />
        <input onClick={callSearch} type="submit" value="SEARCH" />
      </form>
    </section>
  );
}
