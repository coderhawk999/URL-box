import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Copy, Edit, Delete, ExternalLink } from "../../assets/svgIcons/svg";
import EditLinkPopup from "../modals/editLinkModal";
import { COLORS } from "../../constants/color";
import copy from "copy-to-clipboard";
import Popup from "reactjs-popup";

const SearchCard = ({
  description,
  link,
  tags,
  type,
  title,
  color,
  id,
  handleDeleteLinks,
}) => {
  const [show, setShow] = useState(false);
  const [showedit, setEdit] = useState(false);
  const [state, setState] = useState({
    link: link,
    tags: tags,
    title: title,
    color: color,
  });
  const update = (link) => {
    setState(link);
  };
  return (
    <div className="card-container">
      <Popup
        open={show}
        className={"my-popup-content"}
      >
        <div
          style={{
            padding: "15px",
            backgroundColor: "#4864e6",
            color: "white",
            fontSize: "1.2rem",
            fontWeight: "600",
            textAlign: "center",
            border: "solid grey 0px",
            borderRadius: "20px",
          }}
        >
          Link copied to clipboard
        </div>
      </Popup>
      <EditLinkPopup
        open={showedit}
        id={id}
        title={title}
        update={update}
        onClose={() => {
          setEdit(false);
        }}
      />
      <div className="card">
        <p
          className="card__search-platform"
          style={{ background: COLORS[`${state.color}`] }}
        >
          {type}
        </p>
        <div className="card-content">
          <p className="card-content__search-tags">
            {state.tags.length > 0
              ? state.tags.map((info, index) => {
                  return <p key={info.id}>{info.title}</p>;
                })
              : ""}{" "}
          </p>
          <p className="card-content__search-title">{state.title}</p>
          {description ? (
            description.length > 0 ? (
              <div className="card-content__description">{description}</div>
            ) : (
              ""
            )
          ) : (
            ""
          )}
          <div className="card-content__buttons">
            <div style={{ display: "flex" }}>
              <Link
                className={"button-outline-accent"}
                to="#"
                onClick={() => {
                  copy(link);
                  setShow(true);
                  setTimeout(() => {
                    setShow(false);
                  }, 1000);
                }}
              >
                <Copy />
              </Link>
              <Link
                className={"button-outline-accent"}
                to="#"
                onClick={() => {
                  window.open(state.link, "_blank");
                }}
              >
                <ExternalLink />
              </Link>
            </div>

            <div className="card-content__buttons-tools">
              <Link
                className={"button-outline-accent"}
                onClick={() => {
                  setEdit(true);
                }}
              >
                <Edit />
              </Link>
              <Link
                className={"button-outline-accent"}
                onClick={() => {
                  handleDeleteLinks(id);
                }}
              >
                <Delete />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
