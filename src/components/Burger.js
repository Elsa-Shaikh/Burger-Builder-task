import { Box, Typography } from "@mui/material";
import React from "react";
import bun_top from "../Assets/bun top.jpg";
import bun_bottom from "../Assets/bun bottom.png";
import bacon from "../Assets/bacon.png";
import salad from "../Assets/salad.jpg";
import cheese from "../Assets/cheese.jpg";
import meat from "../Assets/meat.jpg";

const Burger = () => {
  return (
    <>
      <Box
        width={"500px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <div style={{ width: "300px", height: "100px" }}>
          <img src={bun_top} alt="bun top" width={"300px"} height={100} />
        </div>
        <Typography>Please add some ingredients</Typography>

        <img src={salad} alt="salad" width={"200px"} height={"30px"} />
        <img src={meat} alt="meat" width={"200px"} height={"30px"} />
        <img src={bacon} alt="bacon" width={"200px"} height={"30px"} />
        <img src={cheese} alt="cheese" width={"200px"} height={"30px"} />

        <div style={{ width: "300px", height: "100px" }}>
          <img
            src={bun_bottom}
            alt="bun top"
            width={"300px"}
            height={"100px"}
          />
        </div>
      </Box>
    </>
  );
};

export default Burger;
