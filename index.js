const express = require("express");
const env = require("./config/environment");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();
const port = 80;
// process.env.port ||
const bodyParser = require("body-parser");
const cors = require("cors");
const expressLayouts = require("express-ejs-layouts");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
const passportJWT = require("./config/passport-jwt-strategy");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash = require("connect-flash");
const db = require("./config/mongoose");
const customMware = require("./config/middleware");
const path = require("path");

// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// mongo store is used to store the session cookie in the db
app.use(
  session({
    name: "portfolioback",
    // TODO change the secret before deployment in production mode
    // secret: env.session_cookies_key,
    secret: env.session_cookies_key,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: new MongoStore(
      {
        mongooseConnection: db,
        autoRemove: "disabled",
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      },
      function (err) {
        console.log(err || "connect-mongodb setup ok");
      }
    ),
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(customMware.setFlash);

app.use(passport.setAuthenticatedUser);
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(expressLayouts);

app.use(express.static("./assets"));

app.use(cors());
// use express router
app.use("/", require("./routes"));
app.use(logger(env.morgan.mode, env.morgan.options));
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  // console.log("gidbuhsbvufdhbvuffbsevyue", process.env);
  console.log(`Server is running on port: ${port}`);
});
