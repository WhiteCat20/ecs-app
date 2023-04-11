import React from "react";
import { Link } from "react-router-dom";

const HeaderChild = ({ headerName }) => {
  return (
    <div className="p-3 pt-4">
      <div className="container" style={{ color: "#fff", fontSize: "24px" }}>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <span className="px-3">{headerName}</span>
      </div>
    </div>
  );
};

export default HeaderChild;
