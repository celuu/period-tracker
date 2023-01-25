const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const passport = require("passport");
const app = express();
app.use(passport.initialize());


const cors = require("cors");
const { isProduction } = require("./config/keys");
const csurf = require("csurf");

require("./models/User");
require("./config/passport");
require("./models/Tweet");


const usersRouter = require("./routes/api/users"); 
const tweetsRouter = require("./routes/api/tweets");
const csrfRouter = require("./routes/api/csrf");



app.use(logger("dev")); // log request components (URL/method) to terminal
app.use(express.json()); // parse JSON request body
app.use(express.urlencoded({ extended: false })); // parse urlencoded request body
app.use(cookieParser()); // parse cookies as an object on req.cookies

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.statusCode = 404;
  next(err);
});



app.use((err, req, res, next) => {
  serverErrorLogger(err);
  const statusCode = err.statusCode || 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    statusCode,
    errors: err.errors,
  });
});


// Security Middleware
if (!isProduction) {
  // Enable CORS only in development because React will be on the React
  // development server (http://localhost:3000). (In production, the Express 
  // server will serve the React files statically.)
  app.use(cors());
}

app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    },
  })
);


// Attach Express routers
app.use("/api/users", usersRouter); 
app.use("/api/tweets", tweetsRouter);
app.use("/api/csrf", csrfRouter);

module.exports = app;
