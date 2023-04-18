import { Box } from "@mui/material";
import { Form } from "react-bootstrap";
import { useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import "../../../css/app.css";
import FullPageBackground from "../../Template/FullPageBackground";
import axios from "axios";
import API from "../../../api/api";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const PinjamECS = () => {
  const [nama_peminjam, setNamaPeminjam] = useState("");
  const [nama_barang, setNamaBarang] = useState("");
  const [kepentingan, setKepentingan] = useState("");
  const [tanggal_pinjam, setTanggalPinjam] = useState("");
  const [tanggal_kembali, setTanggalKembali] = useState("");
  const [foto_barang, setFotoBarang] = useState(null);
  const [jaminan, setJaminan] = useState("");
  const [signature, setSignature] = useState("");

  //Dialog
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  //state for handling next page
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = (e) => {
    e.preventDefault();
    setCurrentPage(2);
  };
  const handlePreviousPage = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const handleSignatureEnd = () => {
    const dataUrl = signatureRef.toDataURL();
    setSignature(dataUrl);
  };

  const handleClearSignature = (e) => {
    e.preventDefault();
    signatureRef.clear();
  };

  //Dialog Open and Close
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location = "/pinjam";
  };

  //Handle Error
  const handleErrorOpen = () => {
    setOpenError(true);
  };

  const handleErrorClose = () => {
    setOpenError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${API}/api/pinjam`,
        {
          nama_peminjam,
          nama_barang,
          kepentingan,
          tanggal_pinjam,
          tanggal_kembali,
          foto_barang,
          jaminan,
          signature,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      handleClickOpen();
      // alert("Success!!");
    } catch (error) {
      handleErrorOpen();
      console.log(error.response.data.message);
      // alert(error.response.data.message);
    }
  };

  let signatureRef;

  return (
    <FullPageBackground backgroundColor="#272727">
      <div style={{ color: "white" }}>
        <div style={centering}>
          <div
            className="form-container"
            style={{
              height: "200px",
              paddingTop: "50px",
              
            }}
          >
            <div>
              <h1 style={{ textAlign: "center", fontSize: "20px" }}>
                PINJAM ECS
              </h1>
              <form onSubmit={handleSubmit}>
                {currentPage === 1 && (
                  <div className="form-page-1">
                    <Form.Label>Nama Barang</Form.Label>
                    <Form.Control
                      value={nama_barang}
                      onChange={(e) => setNamaBarang(e.target.value)}
                      style={removeBackshadowForm}
                    />
                    <Form.Label className="mt-2">Nama Peminjam</Form.Label>
                    <Form.Control
                      value={nama_peminjam}
                      onChange={(e) => setNamaPeminjam(e.target.value)}
                      style={removeBackshadowForm}
                    />
                    <Form.Label className="mt-2">Kepentingan</Form.Label>
                    <Form.Control
                      value={kepentingan}
                      onChange={(e) => setKepentingan(e.target.value)}
                      style={removeBackshadowForm}
                    />
                    <Form.Label className="mt-2">Tanggal Pinjam</Form.Label>
                    <Form.Control
                      value={tanggal_pinjam}
                      type="date"
                      onChange={(e) => setTanggalPinjam(e.target.value)}
                      style={removeBackshadowForm}
                    />
                    <Form.Label className="mt-2">Tanggal Kembali</Form.Label>
                    <Form.Control
                      value={tanggal_kembali}
                      type="date"
                      onChange={(e) => setTanggalKembali(e.target.value)}
                      style={removeBackshadowForm}
                    />
                    <Form.Label className="mt-2">Jaminan</Form.Label>
                    <Form.Control
                      value={jaminan}
                      onChange={(e) => setJaminan(e.target.value)}
                      style={removeBackshadowForm}
                    />
                    <Form.Group controlId="formFile" className="mt-2">
                      <Form.Label>Foto Barang</Form.Label>
                      <Form.Control
                        id="file_photo"
                        onChange={(e) => setFotoBarang(e.target.files[0])}
                        type="file"
                      />
                    </Form.Group>
                    <a
                      className="btn mt-3"
                      style={buttonForm}
                      onClick={handleNextPage}
                    >
                      Next
                    </a>
                  </div>
                )}
                {currentPage === 2 && (
                  <div className="form-page-2">
                    <p>Silahkan tanda tangan : </p>
                    <div
                      style={{
                        width: "100%",
                        height: "200px",
                        background: "white",
                      }}
                    >
                      <SignatureCanvas
                        penColor="black"
                        canvasProps={{
                          width: 500,
                          height: 200,
                          className: "sigCanvas",
                        }}
                        ref={(ref) => (signatureRef = ref)}
                        onEnd={handleSignatureEnd}
                      />
                    </div>
                    <a
                      className="btn btn-sm btn-danger mt-2"
                      onClick={handleClearSignature}
                    >
                      Clear
                    </a>
                    <a
                      className="btn mt-2"
                      style={buttonForm}
                      onClick={handlePreviousPage}
                    >
                      Previous
                    </a>
                    <button className="btn mt-3" style={buttonForm}>
                      Submit
                    </button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        Terima kasih sudah menjalani SOP peminjaman!
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
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </FullPageBackground>
  );
};

const centering = {
  display: "flex",
  justifyContent: "center",
};

const removeBackshadowForm = {
  outline: "none",
  borderRadius: "4px",
  boxShadow: "none",
};

const buttonForm = {
  backgroundColor: "#CC9901",
  width: "100%",
  color: "white",
  borderRadius: "8px",
};

export default PinjamECS;
