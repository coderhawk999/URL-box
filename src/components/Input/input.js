import React from "react";

const CustomInput = (props) => {
  return (
    <div className="custom-input">
      <p className="custom-input-label">{props.label}</p>
      <input type="text" {...props} />
    </div>
  );
};

export default CustomInput;
