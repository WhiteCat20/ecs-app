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
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import API from "../../../api/api";
import { Link } from "react-router-dom";

const ListAgenda = () => {
  const [agendas, setAgendas] = useState([]);
  const getAgenda = async () => {
    const response = await axios.get(`${API}/api/agendas`);
    setAgendas(response.data);
  };
  const deleteAgenda = async (id) => {
    try {
      await axios.delete(`${API}/api/agendas/${id}`);
      getAgenda();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAgenda();
  }, []);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Nama Agenda</b>
              </TableCell>
              <TableCell>
                <b>Tanggal</b>
              </TableCell>
              <TableCell>
                <b>Deskripsi</b>
              </TableCell>
              <TableCell>
                <b>Kode Absensi</b>
              </TableCell>
              <TableCell>
                <b>Action</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {agendas.map((agenda, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {agenda.nama_agenda}
                </TableCell>
                <TableCell>{agenda.tanggal}</TableCell>
                <TableCell>{agenda.deskripsi}</TableCell>
                <TableCell>{agenda.kode_absensi}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button variant="contained" color="primary">
                      <Link style={{ all: "unset" }} to={`edit/${agenda.id}`}>
                        Edit
                      </Link>
                    </Button>
                    <Button
                      onClick={() => deleteAgenda(agenda.id)}
                      variant="contained"
                      color="error"
                    >
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListAgenda;
