import React, { useState } from "react";
import HeaderChild from "../Template/HeaderChild";
import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";

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
          <Form.Label>Deskripsi Agenda</Form.Label>
          <FloatingLabel
            controlId="floatingTextarea"
            style={{ color: "#000", }}
            label="Silahkan diisi"
            className="mb-3"
          >
            <Form.Control as="textarea" style={{ height:"100px" }} />
          </FloatingLabel>
          <div style={{ display: "flex", justifyContent: "end" }}>
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
