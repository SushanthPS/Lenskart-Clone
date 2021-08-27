const express = require("express");
const Cart = require("../model/cartModel");
const router = express.Router();

router.post("", async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    return res.send(cart);
  } catch (err) {
    return res.send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    const cart = await Cart.find().lean().exec();
    return res.send(cart);
  } catch (err) {
    return res.send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    return res.send(cart);
  } catch (err) {
    return res.send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.send(cart);
  } catch (err) {
    return res.send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    return res.send(cart);
  } catch (err) {
    return res.send(err.message);
  }
});

module.exports = router;
