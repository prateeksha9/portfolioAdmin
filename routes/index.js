const express = require("express");
const passport = require("passport");

const router = express.Router();
const homeController = require("../controllers/home_controller");
const addThings = require("../controllers/add_things");
const app = express();
console.log("router loaded");
// const imageController = require("../controllers/image");

router.get("/", homeController.home);
router.use("/users", require("./users"));
router.use("/image", require("./image"));
router.use("/navToSketch", addThings.addImage);
router.use("/navToProject", addThings.addProject);
router.use("/navToPoem", addThings.addPoem);
router.use("/navToBook", addThings.addBook);
router.use("/navToNonTechnical", addThings.addNonTechnical);
router.use("/getapi", require("./getapi"));
router.use("/deletethings", require("./deletethings"));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

module.exports = router;
