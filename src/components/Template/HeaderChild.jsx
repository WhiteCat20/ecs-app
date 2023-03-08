import React from "react";

const HeaderChild = ({}) => {
  return (
    <div className="p-3 pt-4">
      <div className="container" style={{ color: "#fff", fontSize: "24px" }}>
        <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
          <i className="fa-solid fa-arrow-left"></i>
          <span className="px-3">Jadwal Piket</span>
        </a>
      </div>
    </div>
  );
};

export default HeaderChild;
