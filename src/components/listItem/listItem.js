import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Copy, Edit, Delete, ExternalLink } from "../../assets/svgIcons/svg";
import EditLinkPopup from "../modals/editLinkModal";
import { COLORS } from "../../constants/color";
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
  const [showedit,setEdit] = useState(false)
  return (
    <div className="card-container">
      <EditLinkPopup
        open={showedit}
        id={id}
        title={title}
        onClose={() => {
          setEdit(false);
        }}
      />
      <div className="card">
        <p
          className="card__search-platform"
          style={{ background: COLORS[`${color}`] }}
        >
          {type}
        </p>
        <div className="card-content">
          <p className="card-content__search-tags">
            {tags.length > 0
              ? tags.map((info, index) => {
                  return <p key={info.id}>{info.title}</p>;
                })
              : ""}{" "}
          </p>
          <p className="card-content__search-title">{title}</p>
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
                  setShow(!show);
                }}
              >
                <Copy />
              </Link>
              <Link
                className={"button-outline-accent"}
                to="#"
                onClick={() => {
                  window.open(link, "_blank");
                }}
              >
                <ExternalLink />
              </Link>
            </div>

            <div className="card-content__buttons-tools">
              <Link className={"button-outline-accent"} onClick={()=>{setEdit(true)}}>
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
