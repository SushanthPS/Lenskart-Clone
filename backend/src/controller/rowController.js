const express = require("express");
const Row = require("../model/rowModel");
const router = express.Router();

router.post("", async (req, res) => {
  try {
    const row = await Row.create(req.body);
    return res.send(row);
  } catch (err) {
    return res.send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    const row = await Row.find().populate("row").lean().exec();
    return res.send(row);
  } catch (err) {
    return res.send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const row = await Row.findByIdAndDelete(req.params.id).lean().exec();
    return res.send(row);
  } catch (err) {
    return res.send(err.message);
  }
});

module.exports = router;
