import React from "react";
import srchIcon from "../../assets/icons/search.png";
const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="search"
          className="search-bar-input"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
