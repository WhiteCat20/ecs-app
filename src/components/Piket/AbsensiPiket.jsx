import React from "react";
import HeaderChild from "../Template/HeaderChild";
import Form from "react-bootstrap/Form";
import listAsisten from "./listAsisten";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const AbsensiPiket = () => {
  const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
  return (
    <div>
      <HeaderChild headerName="Absensi Piket" />
      <div className="container mt-3" style={{ color: "#fff", width: "90%" }}>
        <Form>
          <Form.Label>Nama Asisten</Form.Label>
          <Form.Select className="form-option">
            <option style={{ fontSize: "12px" }}>Please Find your name</option>
            {listAsisten.map((asisten) => {
              return (
                <option
                  id="option-name"
                  style={{ fontSize: "12px" }}
                  value={asisten}
                >
                  {asisten}
                </option>
              );
            })}
          </Form.Select>
          <Form.Label className="mt-2">Hari</Form.Label>
          <Form.Select>
            <option style={{ fontSize: "12px" }}>Please Select Day</option>
            {days.map((day) => {
              return (
                <option style={{ fontSize: "12px" }} value={day}>
                  {day}
                </option>
              );
            })}
          </Form.Select>
          <Form.Label className="mt-2">Berita Acara</Form.Label>

          <FloatingLabel
            controlId="floatingTextarea"
            style={{ color: "#000" }}
            label="Silahkan diisi"
            className="mb-2"
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload dokumentasi piket</Form.Label>
            <Form.Control type="file" />
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

export default AbsensiPiket;
