import React, { useState } from "react";
import { Link } from "react-router-dom";
const LinkInputBar = (props) => {
  const [query, setQuery] = useState("");
  return (
    <div className="linkInput-bar-container">
      <div className="linkInput-bar">
        <input
          type="linkInput"
          className="linkInput-bar-input"
          placeholder="Add a link or text"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <Link
        className={"button-white"}
        style={{ flex: "0.1", fontSize: "1.3rem" }}
        onClick={() => {
          let data ={
            link:query,
            title:"Test title"
          }
          props.onAdd(data);
        }}
      >
        Add +
      </Link>
    </div>
  );
};

export default LinkInputBar;
