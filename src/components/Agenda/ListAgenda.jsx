import React from "react";
import HeaderChild from "../Template/HeaderChild";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import agendas from "./agenda";

const ListAgenda = () => {
  return (
    <div>
      <HeaderChild headerName="List Agenda" />
      <div className="container" style={{ width: "90%" }}>
        <div>
          {agendas.map((agenda) => {
            return (
              <Accordion expanded={true}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{agenda.judul}</Typography>
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
