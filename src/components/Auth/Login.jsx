import { useState, useContext, useEffect } from "react";
import { Box } from "@mui/material";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import API from "../../api/api";
import axios from "axios";
// import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState("");

  // const { login, token } = useContext(AuthContext);

  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    await axios
      .post(`${API}/api/login`, {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setValidation(error.message);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        color: "#ffff",
      }}
    >
      <Box>
        <h3 style={{ textAlign: "center" }}>Welcome to ECS App</h3>
        <Form onSubmit={loginHandler}>
          <Form.Group className="mb-3">
            {/* {validation && (
              <Alert variant="danger" className="mb-1">
                Check Your Email and Password
              </Alert>
            )} */}
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <button
            className="btn"
            type="submit"
            style={{
              backgroundColor: "#CC9901",
              borderColor: "#CC9901",
              width: "100%",
              color: "white",
            }}
          >
            Login
          </button>
        </Form>
      </Box>
    </Box>
  );
};

export default Login;
