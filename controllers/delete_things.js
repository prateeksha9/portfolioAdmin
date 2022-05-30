const projectModel = require("../models/project");
const imageModel = require("../models/image");
const poemModel = require("../models/poem");
const bookModel = require("../models/book");
const nonTechnicalModel = require("../models/nontechnical");
module.exports.projectdelete = function (req, res) {
  projectModel.findByIdAndDelete(
    { _id: req.params.id },
    function (err, deletedQuestion) {
      if (err) {
        console.log(err);
        return;
      }

      req.flash("success", "Project Deleted");
      return res.redirect("back");
    }
  );
};

module.exports.sketchdelete = function (req, res) {
  imageModel.findByIdAndDelete(
    { _id: req.params.id },
    function (err, deletedSketch) {
      if (err) {
        console.log(err);
        return;
      }

      req.flash("success", "Sketch Deleted");
      return res.redirect("back");
    }
  );
};

module.exports.poemdelete = function (req, res) {
  poemModel.findByIdAndDelete(
    { _id: req.params.id },
    function (err, deletedPoem) {
      if (err) {
        console.log(err);
        return;
      }

      req.flash("success", "Poem Deleted");
      return res.redirect("back");
    }
  );
};

module.exports.bookdelete = function (req, res) {
  bookModel.findByIdAndDelete(
    { _id: req.params.id },
    function (err, deletedBook) {
      if (err) {
        console.log(err);
        return;
      }

      req.flash("success", "Book Deleted");
      return res.redirect("back");
    }
  );
};

module.exports.nontechnicaldelete = function (req, res) {
  nonTechnicalModel.findByIdAndDelete(
    { _id: req.params.id },
    function (err, deletedBook) {
      if (err) {
        console.log(err);
        return;
      }

      req.flash("success", "Non Technical Project Deleted");
      return res.redirect("back");
    }
  );
};
