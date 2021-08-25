const express = require("express");
const mongoose = require("mongoose");
const connect = require("./config/db");
const productController = require("./controller/productController");
const rowController = require("./controller/rowController");
const app = express();
app.use(express.json());
let cors = require("cors");
app.use(cors());

app.use("/product", productController);
app.use("/row", rowController);

app.listen(2345, async () => {
  await connect();
  console.log("listening on port 2345");
});
