import React, { useState } from "react";
import { Link } from "react-router-dom";
const SearchBar = (props) => {
  const [query, setQuery] = useState("");
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="search"
          className="search-bar-input"
          placeholder="Search"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
