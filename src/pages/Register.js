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
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateForm } from "../Utils/helper";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
    if (!validateForm(formData)) {
      return;
    }
    try {
      const response = await register(formData);
      if (response.success) {
        toast.success("Register Successfully!");
        navigate("/");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration Failed!");
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
                  Register{" "}
                </Typography>
                <TextField
                  id="username"
                  label="Username"
                  variant="outlined"
                  placeholder="Please Enter Username"
                  fullWidth
                  name="username"
                  onChange={handleChange}
                />
                <TextField
                  id="email"
                  type="email"
                  label="email"
                  variant="outlined"
                  placeholder="Please Enter Your Email Address"
                  fullWidth
                  name="email"
                  onChange={handleChange}
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
                  Register
                </Button>
                <Typography
                  variant="body2"
                  textAlign={"center"}
                  sx={{ cursor: "pointer" }}
                  onClick={() => navigate("/")}
                >
                  Already have an account? Login
                </Typography>
              </Stack>
            </Box>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
