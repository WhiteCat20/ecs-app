import React, { useState } from "react";
import HeaderChild from "../Template/HeaderChild";
import Form from "react-bootstrap/Form";

const BuatAgenda = () => {
  return (
    <div>
      <HeaderChild headerName="Buat Agenda" />
      <div className="container mt-3" style={{ width: "90%", color: "#fff" }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nama Agenda</Form.Label>
            <Form.Control type="text" placeholder="Contoh : Internalisasi" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tanggal Agenda</Form.Label>
            <Form.Control
              type="text"
              placeholder="Contoh : 11 September 2001"
            />
          </Form.Group>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button style={style.buttonSubmit}>Submit</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

const style = {
  buttonSubmit: {
    backgroundColor: "#CC9901",
    color: "#fff",
    padding: "5px 1.5rem",
    border: "none",
    borderRadius: "4px",
  },
};

export default BuatAgenda;
