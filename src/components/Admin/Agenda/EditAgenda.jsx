import React from "react";
import { useState, useEffect } from "react";
import MainAdmin from "../Template/MainAdmin";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../../api/api";
import { Form, Button } from "react-bootstrap";

const BasicTextFields = () => {
  const [nama_agenda, setNamaAgenda] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [kode_absensi, setKodeAbsensi] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const getAgendaById = async () => {
    const response = await axios.get(`${API}/api/agendas/${id}`);
    console.log(response);
    setNamaAgenda(response.data.nama_agenda);
    setTanggal(response.data.tanggal);
    setDeskripsi(response.data.deskripsi);
    setKodeAbsensi(response.data.kode_absensi);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API}/api/agendas/${id}`, {
        nama_agenda,
        tanggal,
        deskripsi,
        kode_absensi,
      });
      navigate("/admin/agenda");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAgendaById();
  }, []);

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3">
        <Form.Label>Kode Absensi</Form.Label>
        <Form.Control
          value={kode_absensi}
          onChange={(e) => setKodeAbsensi(e.target.value)}
          type="text"
          placeholder="696969"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Nama Agenda</Form.Label>
        <Form.Control
          value={nama_agenda}
          onChange={(e) => setNamaAgenda(e.target.value)}
          type="text"
          placeholder="Nama Agenda"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tanggal</Form.Label>
        <Form.Control
          value={tanggal}
          onChange={(e) => setTanggal(e.target.value)}
          type="text"
          placeholder="Tanggal"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Deskripsi</Form.Label>
        <Form.Control
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
          type="text"
          placeholder="Deskripsi"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

const EditAgenda = () => {
  return (
    <MainAdmin>
      <h3>Halaman Edit Agenda</h3>
      <BasicTextFields />
    </MainAdmin>
  );
};

export default EditAgenda;
