import React, { Fragment } from "react";
import Announcement from "./Announcement";
import CardNav from "./CardNav";
import Header from "./Header";

const Main = () => {
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
          <CardNav desc="Jadwal Piket" icon="fa-solid fa-calendar-days" />
          <CardNav desc="Absensi Piket" icon="fa-regular fa-pen-to-square" />
          <CardNav desc="Buat Agenda" icon="fa-solid fa-gear" />
          <CardNav desc="Absensi Agenda" icon="fa-solid fa-check" />
          <CardNav desc="List Harga" icon="fa-solid fa-money-check-dollar" />
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
