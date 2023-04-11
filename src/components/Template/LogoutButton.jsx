import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";
import axios from "axios";
import { Link } from "react-router-dom";

const LogoutButton = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logoutHandler = async (e) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios.post(`${API}/api/logout`).then(() => {
      localStorage.removeItem("token");
      navigate("/login");
    });
  };

  return (
    <Link
      className="card-nav"
      style={{
        padding: "20px 20px",
        borderRadius: 3,
        fontSize: "16px",
        textDecoration: "none",
        // minWidth: "188px",
        color: "red",
        gap: "10px",
        backgroundColor: "#fff",
      }}
      onClick={logoutHandler}
    >
      <div className="d-flex justify-content-center">
        <i className="fas fa-sign-out-alt" style={{ fontSize: "40px" }}></i>
      </div>
      <section className="text-center mt-1">Logout</section>
    </Link>
  );
};

export default LogoutButton;
