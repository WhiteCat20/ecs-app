import React from "react";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import API from "../api/api";

const Announcement = () => {
  const [agendas, setAgendas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/api/get-last-two-agendas`)
      .then((response) => {
        setAgendas(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [agendas]);
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
          {isLoading && (
            <div className="d-flex justify-content-center pb-3">
              <CircularProgress color="inherit" />
            </div>
          )}
          {!isLoading && (
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
          )}
        </div>
        <div className="px-3 mt-auto">Load More...</div>
      </div>
    </div>
  );
};

export default Announcement;
