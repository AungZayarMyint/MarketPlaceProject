const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
    usedFor: {
      type: String,
      required: true,
    },
    details: {
      type: Array,
    },
    status: {
      type: String,
      default: "pending",
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const productModel = model("Product", productSchema);

module.exports = productModel;
