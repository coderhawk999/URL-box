import React from "react";
const ToolBar = ({ tags = [], onSearch }) => {
  return (
    <div className="toolbar">
      <div className="toolbar-content">
        <div className="toolbar-content-tags">
          {tags.length > 0 ? (
            tags.map((info, index) => {
              return <p className="toolbar-content-tags-tag">{info.title}</p>;
            })
          ) : (
            <p className="toolbar-content-tags-tag">ALL</p>
          )}
        </div>
        <input type="text" placeholder="Search"  onChange={(e)=>{
          onSearch(e.target.value)
        }} />
      </div>
    </div>
  );
};

export default ToolBar;
