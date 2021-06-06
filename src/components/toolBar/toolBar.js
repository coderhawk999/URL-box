import React from "react";
import { Link } from "react-router-dom";
import CustomSelect from "../customSelect/customSelect";
const ToolBar = () => {
  return (
    <div className="toolbar">
      <div>
        <Link className="button-primary">Filter</Link>
      </div>
    </div>
  );
};

export default ToolBar;
