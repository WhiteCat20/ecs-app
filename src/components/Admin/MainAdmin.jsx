import { Avatar, Box, Container, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import AgendaAdmin from "./AgendaAdmin";

const MainAdmin = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <div style={{ color: "white" }}>
      <Container>
        <div
          style={{
            display: "flex",
            gap: "10px",
            paddingTop: "20px",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ bgcolor: "#CC9901" }}>A</Avatar>
          <span style={{ fontSize: "18px", fontWeight: "600" }}>
            Welcome, Admin ECS
          </span>
        </div>
        <Box
          sx={{
            borderBottom: 1,
            paddingTop: "20px",
            display: "flex",
            justifyContent: "center",
            borderColor: "divider",
          }}
        >
          <Tabs
            textColor="red"
            indicatorColor="primary"
            value={value}
            sx={{ fontWeight: "600" }}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Agenda" {...a11yProps(0)} />
            <Tab label="Piket" {...a11yProps(1)} />
            <Tab label="Others" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <AgendaAdmin />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Container>
    </div>
  );
};

export default MainAdmin;
