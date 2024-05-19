import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login } = useContext(AuthContext);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  let navigate = useNavigate();
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      if (response.success) {
        toast.success("Login Successfully!");
        navigate("/home");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login Failed!");
    }
  };

  return (
    <>
      <Grid container mt={5}>
        <Grid item xs={12} md={12} lg={12} p={5}>
          <form onSubmit={handleSubmit}>
            <Box
              width={{ xs: "80%", sm: "80%", md: "40%", lg: "40%" }}
              p={3}
              sx={{ marginLeft: "auto", marginRight: "auto" }}
              boxShadow={`0px 4px 8px rgba(0, 0, 0, 0.1)`}
            >
              <Stack spacing={3}>
                <Typography variant="h4" fontWeight={"bold"}>
                  Login{" "}
                </Typography>
                <TextField
                  id="email"
                  type="email"
                  label="email"
                  name="email"
                  variant="outlined"
                  placeholder="Please Enter Your Email Address"
                  onChange={handleChange}
                  fullWidth
                />
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    name="password"
                    onChange={handleChange}
                    placeholder="Please Enter Password"
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "black" }}
                  type="submit"
                >
                  Login
                </Button>
                <Typography
                  variant="body2"
                  textAlign={"center"}
                  sx={{ cursor: "pointer" }}
                  onClick={() => navigate("/register")}
                >
                  Don't have an account? Register
                </Typography>
              </Stack>
            </Box>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
