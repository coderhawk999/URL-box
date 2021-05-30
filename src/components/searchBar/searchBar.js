import React, { useState } from "react";
import { Link } from "react-router-dom";
import srchIcon from "../../assets/icons/search.png";
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
      <Link
        className={"button-white"}
        style={{ flex: "0.1",fontSize:"1.3rem" }}
        onClick={() => {
          props.onChange(query);
        }}
      >
        Search
      </Link>
    </div>
  );
};

export default SearchBar;
