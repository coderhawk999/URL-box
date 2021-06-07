import React, { useState, useEffect } from "react";
import MultiSelect from "../multiSelect/multiSelect";
import db from "../../db";
import { Link } from "react-router-dom";

const Filter = (props) => {
  const [tags, SetTags] = useState([]);
  useEffect(() => {
    db.table("tags")
      .toArray()
      .then((res) => {
        console.log(res);
        SetTags(res);
      });
  }, []);
  return (
    <div className="filter-container">
      <div className="filter">
        <div className="filter-content">
          <div className="filter-title">
            {" "}
            <p>Add Filters</p>
          </div>
          <div className="filter-content-fields">
            <MultiSelect
              label="Add Tags"
              tags={props.tags}
              onAdd={(tag) => {
                var tags = [...tags];
                SetTags([...tags, { ...tag }]);
              }}
              AddMore={false}
              onDelete={(tagId) => {
                var newList = tags.filter((tag) => tag.id != tagId);
                SetTags([...newList]);
              }}
              options={tags}
            />
            {/* <MultiSelect
              label="Add Tags"
              tags={props.tags}
              onAdd={(tag) => {
                var tags = [...tags];
                SetTags([...tags, { ...tag }]);
              }}
              AddMore={false}
              onDelete={(tagId) => {
                var newList = tags.filter((tag) => tag.id != tagId);
                SetTags([...newList]);
              }}
              options={tags}
            /> */}
          </div>
          <div className="filter-content-buttons">
            <div className="filter-content-buttons-item">
              {" "}
             
              <Link className="button-white" >Apply filter</Link>
              <Link className="button-outline">Cancel</Link>
              <Link className="button-white" >
                Clear Filter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
