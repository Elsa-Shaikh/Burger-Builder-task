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
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Grid container mt={5}>
        <Grid item xs={12} md={12} lg={12} p={5}>
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
                variant="outlined"
                placeholder="Please Enter Your Email Address"
                fullWidth
              />
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
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
              <Button variant="contained" sx={{ backgroundColor: "black" }}>
                Login
              </Button>
              <Typography
                variant="body2"
                textAlign={"center"}
                sx={{ cursor: "pointer" }}
              >
                Don't have an account? Register
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
