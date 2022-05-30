const projectModel = require("../models/project");
const imageModel = require("../models/image");
const poemModel = require("../models/poem");
const nonTechnicalModel = require("../models/nontechnical");
const bookModel = require("../models/book");
module.exports.addImage = (req, res) => {
  imageModel.find({}, function (err, items) {
    if (err) {
      console.log(err);
      return;
    }
    return res.render("add_sketch", {
      title: "Add Sketch",
      items: items.reverse(),
    });
  });
};

module.exports.addProject = (req, res) => {
  projectModel.find({}, function (err, items) {
    if (err) {
      console.log("unable to find Projects");
    }

    return res.render("add_project", {
      title: " Add Project",
      items: items.reverse(),
    });
  });
};

module.exports.addPoem = (req, res) => {
  poemModel.find({}, function (err, items) {
    if (err) {
      console.log("unable to find Projects");
    }
    return res.render("add_poem", {
      title: " Add Poem",
      items: items.reverse(),
    });
  });
};

module.exports.addBook = (req, res) => {
  bookModel.find({}, function (err, items) {
    if (err) {
      console.log("unable to find Projects");
    }
    return res.render("add_book", {
      title: " Add Book",
      items: items.reverse(),
    });
  });
};

module.exports.addNonTechnical = (req, res) => {
  nonTechnicalModel.find({}, function (err, items) {
    if (err) {
      console.log("unable to find Projects");
    }
    return res.render("add_nonTechnical", {
      title: " Add Book",
      items: items.reverse(),
    });
  });
};
