import React, { useState } from "react";

const CustomSelect = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="custom-select">
      <button
        className="custom-select-title"
        onClick={() => {
          setShow(!show);
        }}
      >
        Select an option
        <i class="arrow down"></i>
      </button>

      <ul
        className={
          show ? "custom-select-options" : "custom-select-options-none"
        }
      >
        <li>Waht is your</li>
        <li>Select an option</li>

        <li>Select an option</li>
      </ul>
      <p></p>
    </div>
  );
};

export default CustomSelect;
