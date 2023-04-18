import * as React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";
import Logo from "../../../img/logo-ecs.png";
import token from "../../Auth/token";
import axios from "axios";
import API from "../../../api/api";

const drawerWidth = 240;

const MainAdmin = ({ children }, props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();

  const [user, setUser] = useState([]);

  const fetchData = () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios.get(`${API}/api/datauser`).then((response) => {
      setUser(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    if (!token) {
      navigate("/");
    }
    if (user.level == "user") {
      navigate("/");
    }
  }, [user]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const NavLink = ({ children, href }) => {
    return (
      <Link style={{ all: "unset", width: "100%" }} to={href}>
        {children}
      </Link>
    );
  };

  const drawer = (
    <div>
      <Toolbar>
        <Link to="/admin">
          <img className="img-fluid" width="200" src={Logo} alt="Logo" />
        </Link>
      </Toolbar>
      <Divider />
      <List>
        <ListItem disablePadding>
          <NavLink href="/admin/agenda">
            <ListItemButton>
              <ListItemIcon sx={{ color: "#1976d2" }}>
                <EventAvailableIcon />
              </ListItemIcon>
              <ListItemText>Agenda</ListItemText>
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink href="/admin/piket">
            <ListItemButton>
              <ListItemIcon sx={{ color: "#1976d2" }}>
                <HealthAndSafetyIcon />
              </ListItemIcon>
              <ListItemText>Piket</ListItemText>
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard Admin ECS APP | Role = {user.level}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
        style={{
          backgroundColor: "white",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

MainAdmin.propTypes = {
  window: PropTypes.func,
};

export default MainAdmin;
