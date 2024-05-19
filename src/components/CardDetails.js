import React from "react";
import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import moment from "moment";

const CardDetails = ({ data }) => {
  return (
    <>
      <Grid
        item
        xs={12}
        md={3}
        lg={3}
        sm={12}
        mt={3}
        boxShadow={`0px 4px 8px rgba(0, 0, 0, 0.1)`}
        m={{ md: 2, sm: 0, xs: 1 }}
      >
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Stack p={1} mb={3} direction={"row"} justifyContent={"center"}>
              <LunchDiningIcon
                sx={{
                  color: "tomato",
                }}
              />
            </Stack>
            <Stack
              spacing={2}
              direction={"row"}
              justifyContent={"space-between"}
              mb={3}
              p={1}
              sx={{
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                borderBottom: "1px solid blue",
              }}
            >
              <Stack spacing={1} direction={"row"}>
                <CalendarMonthIcon />
                <Typography color="text.secondary" gutterBottom>
                  {moment(data?.createdAt).format("DD MMMM YYYY")}
                </Typography>
              </Stack>
              <Stack spacing={1} direction={"row"}>
                <AccessTimeFilledIcon />

                <Typography color="text.secondary" gutterBottom>
                  {moment(data?.createdAt).format("hh:mm A")}
                </Typography>
              </Stack>
            </Stack>
            <Typography variant="h5" component="div">
              {data?.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {data?.email}
            </Typography>
            <Stack
              spacing={2}
              direction={"row"}
              justifyContent={"space-evenly"}
              mb={3}
              mt={3}
              p={1}
              sx={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                borderTop: "1px solid tomato",
              }}
            >
              <Typography
                variant="body2"
                fontWeight={"bold"}
                textTransform={"uppercase"}
                fontSize={{ xs: ".8rem", md: ".9rem" }}
              >
                Salad: {data?.order?.salad}
              </Typography>

              <Typography
                variant="body2"
                fontWeight={"bold"}
                textTransform={"uppercase"}
                fontSize={{ xs: ".8rem", md: ".9rem" }}
              >
                Meat: {data?.order?.meat}
              </Typography>

              <Typography
                variant="body2"
                fontWeight={"bold"}
                fontSize={{ xs: ".8rem", md: ".9rem" }}
                textTransform={"uppercase"}
              >
                Cheese: {data?.order?.cheese}
              </Typography>

              <Typography
                variant="body2"
                fontWeight={"bold"}
                fontSize={{ xs: ".8rem", md: ".9rem" }}
                textTransform={"uppercase"}
              >
                Bacon: {data?.order?.bacon}
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              direction={"row"}
              justifyContent={"space-between"}
              mb={3}
              mt={3}
              p={1}
              sx={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                borderTop: "1px solid tomato",
              }}
            >
              <Typography
                variant="body2"
                fontWeight={"bold"}
                fontSize={{ xs: ".8rem", md: ".9rem" }}
                textTransform={"uppercase"}
              >
                Current Price: 5.00
              </Typography>
              <Typography
                variant="body2"
                fontWeight={"bold"}
                fontSize={{ xs: ".8rem", md: ".9rem" }}
                textTransform={"uppercase"}
              >
                Total Amount: {data?.amount}.00
              </Typography>
            </Stack>
            <Stack
              spacing={1}
              direction={"row"}
              justifyContent={"space-between"}
              mb={1}
              mt={3}
              p={1}
              sx={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                borderTop: "1px solid tomato",
              }}
            >
              <Stack
                justifyContent={"center"}
                direction={"column"}
                alignItems={"center"}
              >
                <LocationOnIcon color="primary" />{" "}
                <Typography variant="body2" textTransform={"uppercase"}>
                  {data?.city} | {data?.postalCode}
                </Typography>
              </Stack>
              <Stack
                justifyContent={"center"}
                direction={"column"}
                alignItems={"center"}
              >
                <DeliveryDiningIcon color="error" />
                <Typography variant="body2" textTransform={"uppercase"}>
                  {data?.delivery}
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default CardDetails;
