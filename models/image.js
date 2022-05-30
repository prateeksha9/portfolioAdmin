// Step 3 - this is the code for ./models.js

const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    img: {
      data: String,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

//Image is a model which has a schema imageSchema
const image = mongoose.model("Image", imageSchema);
module.exports = image;
