import React from "react";
const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <p>IPL </p>
      </div>
      <div className="header-nav">
        <p className="header-nav-item">Teams</p>

        <p className="header-nav-item">Players</p>
        <p className="header-nav-item">Source</p>
      </div>
    </div>
  );
};

export default Header;
