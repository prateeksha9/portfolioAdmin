const express = require("express");
const passport = require("passport");

const router = express.Router();

const app = express();
const delete_controller = require("../controllers/delete_things");

router.get("/:id/deleteproject", delete_controller.projectdelete);
router.get("/:id/deletesketch", delete_controller.sketchdelete);
router.get("/:id/deletepoem", delete_controller.poemdelete);
router.get("/:id/deletebook", delete_controller.bookdelete);
router.get("/:id/deletenontechnical", delete_controller.nontechnicaldelete);

module.exports = router;
