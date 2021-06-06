import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import CustomInput from "../Input/input";
import CustomSelect from "../customSelect/customSelect";
import MultiSelect from "../multiSelect/multiSelect";
import { Filter } from "../../assets/svgIcons/svg";
import db from "../../db";
const COLORS = { blue: "#4864e6", red: "#e64848" };

const LinkInputBar = (props) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    title: "Link Title",
    link: "",
    color: "blue",
    tags: [],
  });
  return (
    <div className="linkInput">
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
        <Link className="button-primary" style={{ flex: "0.08" }}>
          <Filter size={16} color={"white"} />
          <p
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            Filter
          </p>
        </Link>

        <div className="linkInput-bar">
          <input
            type="linkInput"
            className="linkInput-bar-input"
            placeholder="Search"
            onChange={(e) => {
              setState({ ...state, [`link`]: e.target.value });
            }}
          />
        </div>

        <Link
          className={"button-primary"}
          style={{ flex: "0.1", fontSize: "1.3rem" }}
          onClick={() => {
            setOpen(!open);
          }}
        >
          Add URL
        </Link>
      </div>
    </div>
  );
};

const InfoPopup = (props) => {
  console.log(COLORS[`${props.state.color}`]);
  const [tags, SetTags] = useState([]);
  useEffect(() => {
    db.table("tags")
      .toArray()
      .then((res) => {
        console.log(res);
        SetTags(res);
      });
  }, []);
  const AddTag = (title) => {
    const tag_obj = {
      title,
    };
    db.table("tags")
      .add(tag_obj)
      .then((id) => {
        var tag = {
          title: title,
          id: id,
        };
        var tags = [...props.state.tags];
        props.setState({
          ...props.state,
          tags: [...tags, { ...tag }],
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <Popup
      className={"my-popup-content"}
      open={props.open}
      contentStyle={{
        width: "30%",
        overflowX: "hidden",
        maxWidth: "30%",
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
              <CustomInput label="URL" value={props.state.link}  onChange={(e)=>{
                props.setState({...props.state,["link"]:e.target.value})
              }}/>
              <CustomInput
                label="URL title"
                onChange={(e) => {
                  props.setState({ ...props.state, ["title"]: e.target.value });
                }}
              />
              <CustomSelect
                label="Choose Tile Colour"
                value={props.state.color}
                onChange={(e) => {
                  props.setState({ ...props.state, ["color"]: e });
                }}
                options={["blue", "red", "purple"]}
              />
              <MultiSelect
                label="Add Tags"
                value={props.state.color}
                tags={props.state.tags}
                onAdd={(tag) => {
                  var tags = [...props.state.tags];
                  props.setState({
                    ...props.state,
                    tags: [...tags, { ...tag }],
                  });
                }}
                onDelete={(tagId) => {
                  var newList = props.state.tags.filter(
                    (tag) => tag.id != tagId
                  );
                  props.setState({ ...props.state, tags: newList });
                }}
                addOnEmpty={(val) => {
                  AddTag(val);
                }}
                options={tags}
              />
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
                    props.state.color,
                    props.state.tags
                  );
                  props.setState({
                    title: "Link Title",
                    link: "",
                    color: "blue",
                    tags: [],
                  });
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
