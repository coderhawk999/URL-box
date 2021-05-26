import React from "react";

const PageHeader = ({ title, heroTitle }) => {
  return (
    <>
      <div className="page-header">
        <p className="page-header-title">
          {title} <span className="page-header-title-hero">{heroTitle}</span>
        </p>
      </div>
    </>
  );
};

export default PageHeader;
