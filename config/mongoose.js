const mongoose = require("mongoose");
const env = require("../config/environment");
mongoose.connect(
  `mongodb+srv://prateeksha:${env.db_password}@cluster0.vzq1e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
);
// ("mongodb://localhost/portfolio_DB");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error Connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to DB");
});

module.exports = db;
