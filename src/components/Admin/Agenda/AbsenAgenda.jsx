import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import API from "../../../api/api";
import { Link } from "react-router-dom";

const AbsenAgenda = () => {
  const [agendas, setAgendas] = useState([]);
  useEffect(() => {
    const getAgenda = async () => {
      const response = await axios.get(`${API}/api/absen-agenda`);
      setAgendas(response.data);
    };
    getAgenda();
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Nama Asisten</b>
              </TableCell>
              <TableCell>
                <b>Nama Agenda</b>
              </TableCell>
              <TableCell>
                <b>Foto</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {agendas.map((absen, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {absen.nama_asisten}
                </TableCell>
                <TableCell>{absen.nama_agenda}</TableCell>
                <TableCell>
                  <a
                    target="_blank"
                    download
                    href={`${API}/storage/absen-agenda/${absen.file_photo}`}
                  >
                    <img
                      width="80"
                      className="img-fluid"
                      src={`${API}/storage/absen-agenda/${absen.file_photo}`}
                    />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AbsenAgenda;
