const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
var cors = require("cors");

const dotenv = require("dotenv").config();
connectDb();

const app = express();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/api/burger", require("./routes/burgerRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

// app.get('/',(req,res)=>{
//     // res.send("Hello World!");
//     res.status(200).json({message:"Hello World!"});
// })

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
