const imgModel = require("../models/image");
const projectModel = require("../models/project");
const poemModel = require("../models/poem");
const bookModel = require("../models/book");
const nonTechnicalModel = require("../models/nontechnical");
var express = require("express");

const fs = require("fs");
const path = require("path");
const multer = require("multer");

module.exports.uploadSketch = (req, res, next) => {
  const obj = {
    name: req.body.name,
    desc: req.body.desc,
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "-" + Date.now());
    },
    img: {
      data: fs.readFileSync(
        path.join(__dirname, "/../assets/uploads/sketch/" + req.file.filename),
        { encoding: "base64" }
      ),
      contentType: "image/jpeg",
    },
  };
  imgModel.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      // item.save();

      res.redirect("back");
    }
  });
};

module.exports.uploadProject = (req, res, next) => {
  const obj = {
    name: req.body.name,
    desc: req.body.desc,
    // tech: req.body.tech,
    technology: req.body.technology,
    img: {
      data: fs.readFileSync(
        path.join(__dirname, "/../assets/uploads/project/" + req.file.filename),
        { encoding: "base64" }
      ),
      contentType: "image/jpeg",
    },
    hlink: req.body.hlink,
    glink: req.body.glink,
    ylink: req.body.ylink,
  };
  projectModel.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      // item.save();

      res.redirect("back");
    }
  });
};

module.exports.uploadPoem = (req, res, next) => {
  const obj = {
    name: req.body.name,
    desc: req.body.desc,
    img: {
      data: fs.readFileSync(
        path.join(__dirname, "/../assets/uploads/poem/" + req.file.filename),
        { encoding: "base64" }
      ),
      contentType: "image/jpeg",
    },
  };
  poemModel.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      // item.save();

      res.redirect("back");
    }
  });
};

module.exports.uploadBook = (req, res, next) => {
  const obj = {
    name: req.body.name,
    desc: req.body.desc,
    img: {
      data: fs.readFileSync(
        path.join(__dirname, "/../assets/uploads/book/" + req.file.filename),
        { encoding: "base64" }
      ),
      contentType: "image/jpeg",
    },
    publisher: req.body.publisher,
    alink: req.body.alink,
    googlelink: req.body.googlelink,
  };
  bookModel.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      // item.save();

      res.redirect("back");
    }
  });
};

module.exports.uploadNonTechnical = (req, res, next) => {
  const obj = {
    name: req.body.name,
    desc: req.body.desc,
    img: {
      data: fs.readFileSync(
        path.join(
          __dirname,
          "/../assets/uploads/non_Technical/" + req.file.filename
        ),
        { encoding: "base64" }
      ),
      contentType: "image/jpeg",
    },
  };
  nonTechnicalModel.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      // item.save();

      res.redirect("back");
    }
  });
};
