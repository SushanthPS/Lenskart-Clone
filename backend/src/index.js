const express = require("express");
const mongoose = require("mongoose");
const connect = require("./config/db");


const productController = require("./controller/productController");
const rowController = require("./controller/rowController");
const signupController = require("./controller/signupController");


const app = express();
app.use(express.json());
let cors = require("cors");
app.use(cors());

app.use("/product", productController);
app.use("/row", rowController);
app.use("/signup", signupController);


const PORT = 2345;
app.listen(PORT, async () => {
  await connect();
  console.log("listening on port " + PORT);
});