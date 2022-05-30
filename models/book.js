// Step 3 - this is the code for ./models.js

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    img: {
      data: String,
      contentType: String,
    },
    publisher: {
      type: String,
      required: true,
    },

    alink: {
      type: String,
      required: true,
    },
    googlelink: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Image is a model which has a schema imageSchema
const book = mongoose.model("Book", bookSchema);
module.exports = book;
