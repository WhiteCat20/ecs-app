import { useState, useEffect } from "react";
import HeaderChild from "../Template/HeaderChild";
import Form from "react-bootstrap/Form";
import axios from "axios";
import listAsisten from "../Piket/listAsisten";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const AbsensiAgenda = () => {
  const [agendas, setAgendas] = useState([]);

  //Absen Agenda
  const [nama_agenda, setNamaAgenda] = useState("");
  const [nama_asisten, setNamaAsisten] = useState("");
  const [kode_absensi, setKodeAbsensi] = useState("");
  const [file_photo, setFilePhoto] = useState(null);

  //Dialog
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    window.location = "/";
  };
  //Handle Error
  const handleErrorOpen = () => {
    setOpenError(true);
  };
  const handleErrorClose = () => {
    setOpenError(false);
  };
  //End Of Dialog
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/api/absen-agenda",
        {
          nama_asisten,
          nama_agenda,
          kode_absensi,
          file_photo,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      handleClickOpen();
    } catch (error) {
      handleErrorOpen();
      console.log(error);
    }
  };
  const getAgendas = async () => {
    const response = await axios.get("http://localhost:8000/api/agendas");
    setAgendas(response.data);
  };
  useEffect(() => {
    getAgendas();
  }, []);
  return (
    <div>
      <HeaderChild headerName="Absensi Agenda" />
      <div className="container" style={{ width: "90%", color: "#fff" }}>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Nama Asisten</Form.Label>
            <Form.Select
              className="form-option"
              value={nama_asisten}
              onChange={(e) => setNamaAsisten(e.target.value)}
            >
              <option style={{ fontSize: "12px" }}>
                Please Find your name
              </option>
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
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Pilih Agenda</Form.Label>
            <Form.Select
              value={nama_agenda}
              onChange={(e) => setNamaAgenda(e.target.value)}
            >
              <option style={{ fontSize: "12px" }}>
                Please Find your agenda
              </option>
              {agendas.map((agenda) => {
                return (
                  <option
                    value={agenda.nama_agenda}
                    style={{ fontSize: "12px" }}
                  >
                    {agenda.nama_agenda}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Kode Absensi</Form.Label>
            <Form.Control
              value={kode_absensi}
              onChange={(e) => setKodeAbsensi(e.target.value)}
              placeholder="Contoh : 696969"
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload dokumentasi piket</Form.Label>
            <Form.Control
              id="file_photo"
              onChange={(e) => setFilePhoto(e.target.files[0])}
              type="file"
            />
          </Form.Group>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button style={style.buttonSubmit}>Submit</button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                Terima kasih sudah absen agenda!
              </DialogTitle>
              <DialogActions>
                <Button onClick={handleClose} autoFocus>
                  OK
                </Button>
              </DialogActions>
            </Dialog>
            {/* Error Dialog */}
            <Dialog
              open={openError}
              onClose={handleErrorClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                Maaf, tolong lengkapi formnya, atau kode absensi salah?...
              </DialogTitle>
              <DialogActions>
                <Button onClick={handleErrorClose} autoFocus>
                  OK
                </Button>
              </DialogActions>
            </Dialog>
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
