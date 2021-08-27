const mongoose = require("mongoose");

const rowSchema = new mongoose.Schema(
  {
    row: [
      { type: mongoose.Schema.Types.ObjectId, ref: "product", required: true },
    ],
  },
  {
    versionKey: false,
  }
);

const Row = mongoose.model("row", rowSchema);

module.exports = Row;
