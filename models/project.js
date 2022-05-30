// Step 3 - this is the code for ./models.js

const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    // tech: {
    //   type: String,
    //   required: true,
    // },
    technology: [{ type: String }],
    img: {
      data: String,
      contentType: String,
    },
    hlink: {
      type: String,
    },
    glink: {
      type: String,
    },
    ylink: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//Project is a model which has a schema ProjectSchema
const project = mongoose.model("Project", projectSchema);
module.exports = project;
