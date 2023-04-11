import React from "react";
import HeaderChild from "../Template/HeaderChild";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { useEffect, useState } from "react";
import API from "../../api/api";

const ListAgenda = () => {
  const [agendas, setAgendas] = useState([]);
  const getAgendas = async () => {
    const response = await axios.get(`${API}/api/agendas`);
    setAgendas(response.data);
  };
  useEffect(() => {
    getAgendas();
  }, []);

  return (
    <div>
      <HeaderChild headerName="List Agenda" />
      <div className="container" style={{ width: "90%" }}>
        <div>
          {agendas.map((agenda, i) => {
            return (
              <Accordion expanded={true}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{agenda.nama_agenda}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <b>{agenda.tanggal}</b> - {agenda.deskripsi}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListAgenda;
