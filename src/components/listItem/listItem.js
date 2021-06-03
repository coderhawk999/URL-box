import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Copy, Edit, Delete } from "../../assets/svgIcons/svg";
const SearchCard = ({
  description,
  tags,
  type,
  title,
  id,
  handleDeleteLinks,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="card">
      <p className="card__search-platform">{type}</p>
      <div className="card-content">
        <p className="card-content__search-tags">
          {tags.length > 0
            ? tags.map((info, index) => {
                return <p>{info}</p>;
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
          <Link
            className={"button-outline-accent"}
            to="#"
            onClick={() => {
              setShow(!show);
            }}
          >
            <Copy />
            {/* <p style={{paddingLeft:"5px",display:"flex",flexDirection:"column",justifyContent:"center"}}>Copy</p> */}
          </Link>
          <div className="card-content__buttons-tools">
            <Link className={"button-outline-accent"}>
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
  );
};

export default SearchCard;
