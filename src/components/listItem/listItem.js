import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const SearchCard = ({ description, tags, platform, title }) => {
  const [ans, setAns] = useState();
  const [show, setShow] = useState(false);
  return (
    <div className="card">
      <p className="card__search-platform">{platform}</p>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#363749"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            {/* <p style={{paddingLeft:"5px",display:"flex",flexDirection:"column",justifyContent:"center"}}>Copy</p> */}
          </Link>
          <div className="card-content__buttons-tools">
            <Link className={"button-outline-accent"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#363749"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
              </svg>
            </Link>
            <Link className={"button-outline-accent"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#363749"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
