import React, { useState } from "react";
import { DeleteX } from "../../assets/svgIcons/svg";
import db from "../../db";
const MultiSelect = (props) => {
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState();
  const [options, SetOptions] = useState(props.options);

  const SearchTag = (query) => {
    var patt = new RegExp("^" + query);
    console.log(patt);
    var newList = options.filter((tag) => tag.title.includes(query));
    console.log(newList);
    SetOptions(newList);
  };

  return (
    <div className="multi-select">
      <p className="label-text">{props.label}</p>
      <div className="multi-select-input">
        {" "}
          {props.tags
            ? props.tags.length > 0
              ? props.tags.map((info, index) => {
                  return (
                    <div
                      className="multi-select-input-selected-item"
                      key={info.id}
                    >
                      <p>{info.title}</p>
                      <DeleteX
                        size={14}
                        color={"#f5f5f5"}
                        onClick={() => {
                          props.onDelete(info.id);
                        }}
                      />
                    </div>
                  );
                })
              : ""
            : ""}
        <input
          multiple={true}
          value={query}
          className="multi-select-input-selected"
          onClick={() => {
            setShow(!show);
            SetOptions(props.options);
          }}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value.length == 0) {
              setShow(false);
            } else {
              setShow(true);
              SearchTag(e.target.value);
            }
          }}
        />
        {/* {props.value || "Select a Option"}
        </input> */}
        {show ? (
          <div className="multi-select-input-options">
            {options ? (
              options.length > 0 ? (
                options.map((info, index) => {
                  return (
                    <p
                      key={info.id}
                      onClick={() => {
                        props.onAdd(info);
                        setShow(!show);
                      }}
                    >
                      {info.title}
                    </p>
                  );
                })
              ) : (
                <p
                  onClick={() => {
                    props.addOnEmpty(query);
                    SetOptions(props.options);
                    setQuery("");
                    setShow(!show);
                  }}
                >
                  Add tag "{query}""
                </p>
              )
            ) : (
              <p>{props.selected || "Select a Option"}</p>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MultiSelect;
