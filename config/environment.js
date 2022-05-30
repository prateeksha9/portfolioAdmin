const fs = require("fs");
const rfs = require("rotating-file-stream");
const path = require("path");

const logDirectory = path.join(__dirname, "../production_logs");
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs.createStream("access.log", {
  interval: "1d",
  path: logDirectory,
});

const development = {
  name: "development",
  session_cookies_key: "blahsomething",
  db: "portfolioback",
  jwt_secret: "portfolio",
  db_password: "prateeksha0209",
  passport_secret: "MPIWIXms8X",
  morgan: {
    mode: "dev",
    options: { stream: accessLogStream },
  },
};

// mongodb+srv://Prateeksha:<password>@cluster0.i1mu1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const production = {
  name: "production",
  session_cookies_key: process.env.sessionCookiesKey,
  // "LoRJGMUHWfD1Y65HqESPc2EeN0GBFrlR",
  // db: "authenticationProduction",

  db_password: "prateeksha0209",
  passport_secret: "MPIWIXms8X",
  // "portfolioSecret",
  morgan: {
    mode: "combined",
    options: { stream: accessLogStream },
  },
};

module.exports =
  eval(process.env.NODE_ENV) == undefined
    ? development
    : eval(process.env.NODE_ENV);
