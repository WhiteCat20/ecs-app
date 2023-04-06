import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Announcement = () => {
  const [agendas, setAgendas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/get-last-two-agendas")
      .then((response) => {
        setAgendas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div
        style={{
          backgroundColor: "#CC9901",
          borderRadius: "4px",
          marginBottom: "1rem",
          paddingBottom: "1rem",
          color: "#ffff",
          fontFamily: "Montserrat",
        }}
        id="Announcement"
        onClick={(event) => (window.location.href = "/list-agenda")}
      >
        <div className="p-3">
          <h1>Agenda Terdekat</h1>
        </div>
        <div>
          <ul>
            {agendas.map((agenda, i) => {
              return (
                <li key={i}>
                  <span className="fw-bold">{agenda.tanggal}</span> -{" "}
                  {agenda.nama_agenda}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="px-3 mt-auto">Load More...</div>
      </div>
    </div>
  );
};

export default Announcement;
