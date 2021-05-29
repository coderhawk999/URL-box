import React from "react";
const SearchCard = ({ description, tags, platform, title }) => {
  return (
    <div className="search-card">
      <p className="search-card__search-platform">{platform}</p>
      <p className="search-card__search-title">{title}</p>
      <p className="search-card__search-tags">
        {tags.length > 0
          ? tags.map((info, index) => {
              return `${info} `;
            })
          : ""}{" "}
      </p>
      <div className="search-card__description">{description}</div>
      <div className="search-card__buttons"></div>
    </div>
  );
};

export default SearchCard;
