const express = require("express");
const router = express.Router();
// const { downloadCSV } = require("../controllers/csv_controller");

const getapiController = require("../controllers/getapi_controller");

router.get("/poem", getapiController.poem);
router.get("/project", getapiController.project);
router.get("/sketch", getapiController.sketch);
router.get("/book", getapiController.book);
router.get("/nontechnical", getapiController.nontechnical);
module.exports = router;
