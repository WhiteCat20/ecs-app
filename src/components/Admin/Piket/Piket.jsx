import React from "react";
import MainAdmin from "../Template/MainAdmin";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Button from "@mui/material/Button";
import API from "../../../api/api";

const Piket = () => {
  const [absenPiket, setAbsenPiket] = useState([]);
  const getAbsenPiket = async () => {
    const response = await axios.get(`${API}/api/absen-piket`);
    setAbsenPiket(response.data);
  };

  const deletePiket = async (id) => {
    try {
      await axios.delete(`${API}/api/absen-piket/${id}`);
      getAbsenPiket();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAbsenPiket();
  }, []);

  return (
    <MainAdmin>
      <h3>Halaman Piket</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Nama Asisten</b>
              </TableCell>
              <TableCell>
                <b>Hari</b>
              </TableCell>
              <TableCell>
                <b>Berita Acara</b>
              </TableCell>
              <TableCell>
                <b>File Photo</b>
              </TableCell>
              <TableCell>
                <b>Action</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {absenPiket.map((absen, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {absen.nama_asisten}
                </TableCell>
                <TableCell>{absen.hari}</TableCell>
                <TableCell>{absen.berita_acara}</TableCell>
                <TableCell>
                  <a
                    target="_blank"
                    download
                    href={`${API}/storage/absen/${absen.file_photo}`}
                  >
                    <img
                      width="80"
                      className="img-fluid"
                      src={`${API}/storage/absen/${absen.file_photo}`}
                    />
                  </a>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => deletePiket(absen.id)}
                    variant="contained"
                    color="error"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainAdmin>
  );
};

export default Piket;
