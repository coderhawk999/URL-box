import React, { useState } from "react";

const CustomSelect = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="custom-select">
      <p className="label-text">{props.label}</p>
      <div className="custom-select-input">
        {" "}
        <p
          className="custom-select-input-selected"
          onClick={() => {
            setShow(!show);
          }}
        >
          {props.value || "Select a Option"}
        </p>
        {show ? (
          <div className="custom-select-input-options">
            {props.options ? (
              props.options.length > 0 ? (
                props.options.map((info, index) => {
                  return (
                    <p
                      onClick={() => {
                        props.onChange(info);
                        setShow(!show);
                      }}
                    >
                      {info}
                    </p>
                  );
                })
              ) : (
                <p>{props.selected || "Select a Option"}</p>
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

export default CustomSelect;
