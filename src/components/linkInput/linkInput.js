import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import CustomInput from "../Input/input";
import CustomSelect from "../customSelect/customSelect";
const COLORS = { blue: "#4864e6", red: "#e64848" };

const LinkInputBar = (props) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    title: "Link Title",
    link: "",
    color: "blue",
  });
  return (
    <div className="linkInput-bar-container">
      <InfoPopup
        open={open}
        title={"Add Info"}
        onClose={() => {
          setOpen(false);
        }}
        state={state}
        setState={setState}
        submit={props.onAdd}
      />
      <div className="linkInput-bar">
        <input
          type="linkInput"
          className="linkInput-bar-input"
          placeholder="Add a link or text"
          onChange={(e) => {
            setState({ ...state, [`link`]: e.target.value });
          }}
        />
      </div>
      <Link
        className={"button-white"}
        style={{ flex: "0.1", fontSize: "1.3rem" }}
        onClick={() => {
          setOpen(!open);
          // let data = {
          //   link: query,
          //   title: "Test title",
          // };
          // props.onAdd(data.title, data.link);
        }}
      >
        Add +
      </Link>
    </div>
  );
};

const InfoPopup = (props) => {
  console.log(COLORS[`${props.state.color}`]);
  return (
    <Popup
      className={"my-popup-content"}
      open={props.open}
      contentStyle={{
        width: "30%",
        overflowX: "hidden",
      }}
      modal
      position="right center"
      {...props}
    >
      <div className="popup-main">
        <div className="pop">
          <div
            className="pop-header"
            style={{
              backgroundColor: COLORS[`${props.state.color}`],
            }}
          >
            <p className="pop-header-title">{"< " + props.title + " >"}</p>
          </div>

          <div className="pop-content">
            <div className="pop-content-info">
              <p className>{props.state.title}</p>
            </div>
            <div className="pop-content-input">
              {" "}
              <CustomInput
                label="Link title"
                onChange={(e) => {
                  props.setState({ ...props.state, ["title"]: e.target.value });
                }}
              />
              <CustomInput label="Link" value={props.state.link} />
              <CustomSelect
                label="Choose Tile Colour"
                value={props.state.color}
                onChange={(e) => {
                  props.setState({ ...props.state, ["color"]: e });
                }}
                options={["blue", "red", "purple"]}
              />
              <CustomSelect label="Add Tags" placeholder />
            </div>
            <div className="pop-content-buttons">
              <Link
                className="button-outline"
                onClick={() => {
                  props.onClose();
                }}
              >
                Cancel
              </Link>
              <Link
                className="button-white"
                onClick={() => {
                  props.submit(
                    props.state.title,
                    props.state.link,
                    props.state.color
                  );
                  props.onClose();
                }}
              >
                Add
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default LinkInputBar;
