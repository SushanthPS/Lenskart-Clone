const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    i: { type: String, required: true },
    img: { type: String, required: true },
    img1: { type: String, required: true },
    img2: { type: String, required: true },
    img3: { type: String, required: true },
    img4: { type: String, required: true },
    img5: { type: String, required: true },
    img6: { type: String, required: true },
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
  },
  {
    versionKey: false,
  }
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;
