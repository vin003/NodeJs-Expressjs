const express = require("express");
const log = require("./middleware/logger");
const app = express();

const home = require("./routes/home");
const courses = require("./routes/courses");
const { application } = require("express");

app.listen(4300, () => {
  console.log("app is listening on 4300...");
});

app.use(express.json());

app.use("/", home);
app.use("/api/courses", courses);

app.set("view engine", "pug");
app.set("views", "./views");
