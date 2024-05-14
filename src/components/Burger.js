import { Box, Typography } from "@mui/material";
import React from "react";
import bun_top from "../Assets/bun top.jpg";
import bun_bottom from "../Assets/bun bottom.png";

const Burger = ({ ingredientsImages }) => {
  return (
    <>
      <Box
        width={"500px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        marginLeft={4}
        marginTop={5}
        boxShadow={`0px 4px 8px rgba(0, 0, 0, 0.1)`}
      >
        <Typography variant="h5" fontWeight={"bolder"}>
          Make Your Burger
        </Typography>

        <div style={{ width: "300px", height: "100px", marginTop: "1rem" }}>
          <img src={bun_top} alt="bun top" width={"300px"} height={100} />
        </div>
        {ingredientsImages.length === 0 ? (
          <Typography variant="body1">Please add some ingredients</Typography>
        ) : (
          ingredientsImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`ingredient-${index}`}
              width={"200px"}
              height={"30px"}
            />
          ))
        )}
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
