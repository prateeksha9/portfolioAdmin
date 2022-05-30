const imgModel = require("../models/image");
const projectModel = require("../models/project");
const poemModel = require("../models/poem");
const bookModel = require("../models/book");
const nonTechnicalModel = require("../models/nontechnical");
module.exports.sketch = (req, res) => {
  imgModel.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred", err);
    } else {
      return res.status(200).json({
        data: items,
      });
    }
  });
};
module.exports.project = (req, res) => {
  projectModel.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred", err);
    } else {
      return res.status(200).json({
        data: items,
      });
    }
  });
};
module.exports.poem = (req, res) => {
  poemModel.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred", err);
    } else {
      return res.status(200).json({
        data: items,
      });
    }
  });
};

module.exports.book = (req, res) => {
  bookModel.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred", err);
    } else {
      return res.status(200).json({
        data: items,
      });
    }
  });
};

module.exports.nontechnical = (req, res) => {
  nonTechnicalModel.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred", err);
    } else {
      return res.status(200).json({
        data: items,
      });
    }
  });
};
