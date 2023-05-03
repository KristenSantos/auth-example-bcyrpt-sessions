const express = require("express");
const path = require("path");
// const handleSessions = require('./middleware/handle-sessions');
const handleCookieSessions = require("./middleware/handle-cookie-sessions");
const logRoutes = require("./middleware/log-routes");
const routes = require("./routes");

var userRouter = require("./profile1");
var postRouter = require("./post1");
var homeRouter = require("./home1"); //*

const app = express();

app.use(handleCookieSessions);
app.use(logRoutes);
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public", "views"));
app.set("view engine", "jade");

app.use("/profiles", userRouter);
app.use("/posts", postRouter);
app.use("/home", homeRouter); //*

app.use("/api", routes);

module.exports = app;
