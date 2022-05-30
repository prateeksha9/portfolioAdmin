// Step 3 - this is the code for ./models.js

const mongoose = require("mongoose");

const nontechnicalSchema = new mongoose.Schema(
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
const nonTechnical = mongoose.model("NonTechnical", nontechnicalSchema);
module.exports = nonTechnical;
