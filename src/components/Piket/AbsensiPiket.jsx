import { useState } from "react";
import HeaderChild from "../Template/HeaderChild";
import Form from "react-bootstrap/Form";
import listAsisten from "./listAsisten";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const AbsensiPiket = () => {
  const [nama_asisten, setNamaAsisten] = useState("");
  const [hari, setHari] = useState("");
  const [berita_acara, setBeritaAcara] = useState("");
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

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/api/absen-piket",
        {
          nama_asisten,
          hari,
          berita_acara,
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
  const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
  return (
    <div>
      <HeaderChild headerName="Absensi Piket" />
      <div className="container mt-3" style={{ color: "#fff", width: "90%" }}>
        <Form onSubmit={submitHandler}>
          <Form.Label>Nama Asisten</Form.Label>
          <Form.Select
            className="form-option"
            value={nama_asisten}
            onChange={(e) => setNamaAsisten(e.target.value)}
          >
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
          <Form.Select
            className="form-option"
            value={hari}
            onChange={(e) => setHari(e.target.value)}
          >
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
            <Form.Control
              as="textarea"
              value={berita_acara}
              onChange={(e) => setBeritaAcara(e.target.value)}
              placeholder="Leave a comment here"
            />
          </FloatingLabel>
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
                Terima kasih sudah absen piket!
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

export default AbsensiPiket;
