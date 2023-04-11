import React from "react";
import { Link } from "react-router-dom";

const CardNav = ({ desc, icon, href }) => {
  return (
    <Link
      to={href}
      style={{ color: "inherit", textDecoration: "none", flexGrow: "1" }}
    >
      <div
        className="card-nav"
        style={{
          padding: "20px 20px",
          borderRadius: 3,
          fontSize: "16px",
          minWidth: "188px",
          gap: "10px",
          backgroundColor: "#fff",
        }}
      >
        <div className="d-flex justify-content-center">
          <i className={icon} style={{ fontSize: "40px" }}></i>
        </div>
        <section className="text-center mt-1">{desc}</section>
      </div>
    </Link>
  );
};

export default CardNav;
