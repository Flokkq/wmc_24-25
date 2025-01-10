var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var toDoRouter = require("./routes/todo");
var tennisPlayerRouter = require("./routes/tennisplayer");

mongoose
  .connect("mongodb://localhost:27017/tennis", {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })

  .then(() => console.log("MongoDB verbunden!"))

  .catch((err) => console.error("Fehler bei der MongoDB-Verbindung:", err));

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));

// Middleware, um JSON im Request-Body zu parsen
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/tennisplayers", tennisPlayerRouter);
app.use(`/todo`, toDoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
