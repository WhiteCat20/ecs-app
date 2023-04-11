import React, { useState } from "react";
import HeaderChild from "../Template/HeaderChild";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";
import axios from "axios";
import API from "../../api/api";

const BuatAgenda = () => {
  const [nama_agenda, setNamaAgenda] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location = "/list-agenda";
  };

  //Handle Error
  const handleErrorOpen = () => {
    setOpenError(true);
  };

  const handleErrorClose = () => {
    setOpenError(false);
  };

  const postAgenda = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/agendas`, {
        nama_agenda,
        tanggal,
        deskripsi,
      });
      handleClickOpen();
    } catch (error) {
      handleErrorOpen();
      console.log(error);
    }
  };
  return (
    <div>
      <HeaderChild headerName="Buat Agenda" />
      <div className="container mt-3" style={{ width: "90%", color: "#fff" }}>
        <Form onSubmit={postAgenda}>
          <Form.Group className="mb-3">
            <Form.Label>Nama Agenda</Form.Label>
            <Form.Control
              value={nama_agenda}
              onChange={(e) => setNamaAgenda(e.target.value)}
              type="text"
              placeholder="Contoh : Internalisasi"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tanggal Agenda</Form.Label>
            <Form.Control
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              type="text"
              placeholder="Contoh : 11 September 2001"
            />
          </Form.Group>
          <Form.Label>Deskripsi Agenda</Form.Label>
          <FloatingLabel
            controlId="floatingTextarea"
            style={{ color: "#000" }}
            label="Silahkan diisi"
            className="mb-3"
          >
            <Form.Control
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              as="textarea"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button style={style.buttonSubmit}>Submit</button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                Agenda Baru telah dibuat!
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
                Maaf, tolong lengkapi formnya...
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

export default BuatAgenda;
