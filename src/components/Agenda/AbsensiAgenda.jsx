import React from "react";
import HeaderChild from "../Template/HeaderChild";
import Form from "react-bootstrap/Form";

const AbsensiAgenda = () => {
  const agendaDummy = ["Pengumpulan Proposal Abmas", "Upgrading Praktikum"];
  return (
    <div>
      <HeaderChild headerName="Absensi Agenda" />
      <div className="container" style={{ width: "90%", color: "#fff" }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Pilih Agenda</Form.Label>
            <Form.Select>
              {agendaDummy.map((a) => {
                return (
                  <option value={a} style={{ fontSize: "12px" }}>
                    {a}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Kode Absensi</Form.Label>
            <Form.Control placeholder="Contoh : 696969" type="text" />
          </Form.Group>
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

export default AbsensiAgenda;
