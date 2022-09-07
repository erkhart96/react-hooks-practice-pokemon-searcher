import React from "react";

function Search({ setSearchTerm }) {

  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={onChangeHandler} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
