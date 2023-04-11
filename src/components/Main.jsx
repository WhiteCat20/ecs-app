import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Announcement from "./Announcement";
import CardNav from "./CardNav";
import Header from "./Header";
import LogoutButton from "./Template/LogoutButton";
import { useNavigate, Navigate } from "react-router-dom";
import API from "../api/api";

const Main = () => {
  const cardNavData = [
    {
      desc: "Jadwal Piket",
      icon: "fa-solid fa-calendar-days",
      href: "/jadwal-piket",
    },
    {
      desc: "Absensi Piket",
      icon: "fa-regular fa-pen-to-square",
      href: "/absensi-piket",
    },
    { desc: "Buat Agenda", icon: "fa-solid fa-gear", href: "/buat-agenda" },
    {
      desc: "Absensi Agenda",
      icon: "fa-solid fa-check",
      href: "/absensi-agenda",
    },
    { desc: "List Harga", icon: "fa-solid fa-money-check-dollar" },
    { desc: "Peminjaman", icon: "fa-solid fa-list-check" },
  ];

  const navigate = useNavigate();

  const [user, setUser] = useState("");

  const token = localStorage.getItem("token");

  const fetchData = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios.get(`${API}/api/datauser`).then((response) => {
      setUser(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <Fragment>
      <div className="container" style={{ paddingBottom: "2rem" }}>
        <Header name={user.name} />
        <Announcement />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexFlow: "wrap",
            gap: "10px",
          }}
        >
          {cardNavData.map((card, i) => {
            return (
              <CardNav
                key={i}
                desc={card.desc}
                icon={card.icon}
                href={card.href}
              />
            );
          })}
          <LogoutButton />
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
