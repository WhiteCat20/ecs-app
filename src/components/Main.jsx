import React, { Fragment } from "react";
import Announcement from "./Announcement";
import CardNav from "./CardNav";
import Header from "./Header";

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
    },
    {
      desc: "Buat Agenda",
      icon: "fa-solid fa-gear",
    },
    {
      desc: "Absensi Agenda",
      icon: "fa-solid fa-check",
    },
    {
      desc: "List Harga",
      icon: "fa-solid fa-money-check-dollar",
    },
    {
      desc: "Peminjaman",
      icon: "fa-solid fa-list-check",
    },
  ];
  return (
    <Fragment>
      <div className="container">
        <Header name="Faiz" />
        <Announcement />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexFlow: "wrap",
            gap: "20px",
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
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
