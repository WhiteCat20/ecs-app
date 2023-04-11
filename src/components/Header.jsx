import React from "react";
import { Link } from "react-router-dom";

const Header = ({ name }) => {
  return (
    <header
      style={{
        padding: "50px 20px 30px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          backgroundColor: "#fff",
          padding: "10px 20px",
          borderRadius: "8px",
        }}
      >
        <Link to="/admin" style={{ color: "#000" }}>
          <i
            class="fa-regular fa-circle-user"
            style={{ fontSize: "30px", fontWeight: "600" }}
          ></i>
        </Link>
        <span>Selamat Datang, {name}</span>
      </div>
    </header>
  );
};

export default Header;
