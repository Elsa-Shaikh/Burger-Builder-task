import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const UnAuthorized = () => {
  let navigate = useNavigate();
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Typography variant="body1" color="grey" align="center" mt={5}>
        Error 401: You are not authorized. Please{" "}
        <span
          onClick={() => navigate("/")}
          style={{ cursor: "pointer", textDecoration: "underline" }}
        >
          login
        </span>
      </Typography>
    </Box>
  );
};

export default UnAuthorized;
