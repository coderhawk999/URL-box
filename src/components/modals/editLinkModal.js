import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import CustomInput from "../Input/input";
import CustomSelect from "../customSelect/customSelect";
import MultiSelect from "../multiSelect/multiSelect";
import { COLORS } from "../../constants/color";
import db from "../../db";
import { Link } from "react-router-dom";
const EditLinkPopup = (props) => {
  const [tags, SetTags] = useState([]);
  const [link, setlink] = useState({
    title: "",
    link: "",
    tags: [],
    color: "blue",
  });

  useEffect(async () => {
    db.table("tags")
      .toArray()
      .then((res) => {
        console.log(res);
        SetTags(res);
      });
    const link = await db.links.where("id").equals(props.id).first();
    setlink(link);
  }, []);

  const UpdateLink = () => {
    db.links.update(props.id, link).then((res) => {
      props.update(link)
      console.log("updated");
    });
  };

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
        var tags = [...link.tags];
        setlink({
          ...link,
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
              backgroundColor: COLORS[`${link.color}`],
            }}
          >
            <p className="pop-header-title">{"< " + props.title + " >"}</p>
          </div>

          <div className="pop-content">
            <div className="pop-content-info">
              <p className>{link.title}</p>
            </div>
            <div className="pop-content-input">
              {" "}
              <CustomInput
                label="URL"
                value={link.link}
                onChange={(e) => {
                  setlink({ ...link, link: e.target.value });
                }}
              />
              <CustomInput
                label="URL title"
                value={link.title}
                onChange={(e) => {
                  setlink({ ...link, title: e.target.value });
                }}
              />
              <CustomSelect
                label="Choose Tile Colour"
                value={link.color}
                onChange={(e) => {
                  props.setState({ ...props.state, color: e });
                }}
                options={["blue", "red", "purple"]}
              />
              <MultiSelect
                label="Add Tags"
                value={link.color}
                tags={link.tags}
                onAdd={(tag) => {
                  var tags = [...link.tags];
                  setlink({
                    ...link,
                    tags: [...tags, { ...tag }],
                  });
                }}
                onDelete={(tagId) => {
                  var newList = link.tags.filter((tag) => tag.id != tagId);
                  setlink({ ...props.link, tags: newList });
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
                  UpdateLink();
                  setlink({
                    title: "Link Title",
                    link: "",
                    color: "blue",
                    tags: [],
                  });
                  props.onClose();
                }}
              >
                Udpate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};
export default EditLinkPopup;
