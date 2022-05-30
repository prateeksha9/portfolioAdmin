const express = require("express");
const router = express.Router();
const multer = require("multer");
const imageController = require("../controllers/image_controller");

const storageSketch = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/../assets/uploads/sketch/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const uploadSketch = multer({ storage: storageSketch });

router.post(
  "/uploadSketch",
  uploadSketch.single("image"),
  imageController.uploadSketch
);

const storageProject = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/../assets/uploads/project/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const uploadProject = multer({ storage: storageProject });

router.post(
  "/uploadProject",
  uploadProject.single("image"),
  imageController.uploadProject
);

const storagePoem = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/../assets/uploads/poem/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const uploadPoem = multer({ storage: storagePoem });

router.post(
  "/uploadPoem",
  uploadPoem.single("image"),
  imageController.uploadPoem
);

const storageBook = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/../assets/uploads/book/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const uploadBook = multer({ storage: storageBook });

router.post(
  "/uploadBook",
  uploadBook.single("image"),
  imageController.uploadBook
);

const storageNonTechnical = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/../assets/uploads/non_Technical/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const uploadNonTechnical = multer({ storage: storageNonTechnical });

router.post(
  "/uploadNontechnical",
  uploadNonTechnical.single("image"),
  imageController.uploadNonTechnical
);

module.exports = router;
