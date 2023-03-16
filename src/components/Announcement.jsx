import React from "react";

const Announcement = () => {
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
            <li>
              <span className="fw-bold">15 Maret 2023</span> Pengumpulan
              proposal pengabdian masyarakat
            </li>
            <li>
              <span className="fw-bold">21 Maret 2023</span> Upgrading Praktikum
              SPK
            </li>
          </ul>
        </div>
        <div className="px-3 mt-auto">Load More...</div>
      </div>
    </div>
  );
};

export default Announcement;
