import React from "react";

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
          justifyContent:'center',
          gap: "10px",
          backgroundColor: "#fff",
          padding: "10px 20px",
          borderRadius: "8px",
        }}
      >
        <i
          class="fa-regular fa-circle-user"
          style={{ fontSize: "30px", fontWeight: "600" }}
        ></i>
        <span>Selamat Datang, {name}</span>
      </div>
    </header>
  );
};

export default Header;
