import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";

const AgendaAdmin = () => {
  const [agendas, setAgendas] = useState([]);
  const getAgendas = async () => {
    const response = await axios.get("http://localhost:8000/api/agendas");
    setAgendas(response.data);
  };
  useEffect(() => {
    getAgendas();
  }, []);
  return (
    <Box sx={{ bgcolor: "white" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Nama Agenda</b>
            </TableCell>
            <TableCell>
              <b>Tanggal Agenda</b>
            </TableCell>
            <TableCell>
              <b>Deskripsi Agenda</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {agendas.map((agenda) => {
            return (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {agenda.nama_agenda}
                </TableCell>
                <TableCell>{agenda.tanggal}</TableCell>
                <TableCell>{agenda.deskripsi}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
};

export default AgendaAdmin;
