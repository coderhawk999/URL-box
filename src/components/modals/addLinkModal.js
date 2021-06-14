import React, { useEffect,useState } from "react";
import Popup from "reactjs-popup";
import CustomInput from "../Input/input";
import CustomSelect from "../customSelect/customSelect";
import MultiSelect from "../multiSelect/multiSelect";
import { COLORS } from "../../constants/color";
import db from "../../db";
import { Link } from "react-router-dom";

const AddLinkModal = (props) => {
  const [tags, SetTags] = useState([]);
  useEffect(() => {
    db.table("tags")
      .toArray()
      .then((res) => {
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
                label="URL"
                value={props.state.link}
                onChange={(e) => {
                  props.setState({ ...props.state, link: e.target.value });
                }}
              />
              <CustomInput
                label="URL title"
                onChange={(e) => {
                  props.setState({ ...props.state, title: e.target.value });
                }}
              />
              <CustomSelect
                label="Choose Tile Colour"
                value={props.state.color}
                onChange={(e) => {
                  props.setState({ ...props.state, color: e });
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
                    (tag) => tag.id !== tagId
                  );
                  props.setState({ ...props.state, tags: newList });
                }}
                AddMore={true}
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

export default AddLinkModal;
