import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import UnAuthorized from "./UnAuthorized";
import CardDetails from "../components/CardDetails";
import { CircularProgress, Grid, Typography } from "@mui/material";
import { toast } from "react-toastify";

const OrderDetails = () => {
  const { isLoggedIn, ordersRead } = useContext(AuthContext);
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleOrders();
  }, []);

  const handleOrders = async () => {
    const response = await ordersRead();
    if (response.success) {
      setDetails(response);
      setLoading(false);
    } else {
      toast.error("Failed to Load Data!");
    }
  };
  if (isLoggedIn) {
    return (
      <>
        <Navbar />
        <Typography
          mt={4}
          variant="h5"
          fontWeight={"bold"}
          textAlign={"center"}
          pb={4}
        >
          Your Order's
        </Typography>
        {loading ? ( // Conditionally render CircularProgress while loading
          <Grid container justifyContent="center">
            <CircularProgress />
          </Grid>
        ) : (
          <Grid
            container
            mt={4}
            padding={{ md: 4, sm: 0, xs: 0 }}
            justifyContent={"center"}
          >
            {details.count === 0 ? (
              <Grid
                item
                xs={12}
                md={3}
                lg={3}
                sm={12}
                mt={3}
                boxShadow={`0px 4px 8px rgba(0, 0, 0, 0.1)`}
                justifyContent={"center"}
                alignItems={"center"}
                m={2}
              >
                <Typography variant="body1" fontWeight={"bold"}>
                  No data found!
                </Typography>
              </Grid>
            ) : (
              details?.data?.map((data, index) => (
                <CardDetails key={index} data={data} />
              ))
            )}
          </Grid>
        )}
      </>
    );
  } else {
    return (
      <>
        <UnAuthorized />
      </>
    );
  }
};

export default OrderDetails;
