const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    i: { type: String, required: true },
    img: { type: String, required: true },
    brand: { type: String, required: true },
    rating: { type: String, required: true },
    star: { type: String, required: true },
    priceImg: { type: String, required: true },
    link: { type: String, required: true },
    frameType: { type: String, required: true },
    frameShape: { type: String, required: true },
    frameColor: { type: String, required: true },
    price: { type: String, required: true },
    sample: { type: String, required: true },
    size: { type: String, required: true },
    qty: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
