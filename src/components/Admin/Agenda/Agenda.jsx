import MainAdmin from "../Template/MainAdmin";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ListAgenda from "./ListAgenda";
import AbsenAgenda from "./AbsenAgenda";

const LabTabs = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="List Agenda" value="1" />
            <Tab label="Absensi Agenda" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ListAgenda />
        </TabPanel>
        <TabPanel value="2">
          <AbsenAgenda />
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
};

const Agenda = () => {
  return (
    <MainAdmin>
      <h3>Halaman Agenda</h3>
      <LabTabs />
    </MainAdmin>
  );
};

export default Agenda;
