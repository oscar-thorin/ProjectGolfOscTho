const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;
const courseRoutes = express.Router();

let Course = require("./course.model");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/courses", {
  useNewUrlParser: true,
});
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

//Get all Listings and find by Location
courseRoutes.route("/").get(function (req, res) {
  var name = req.query.name;
  if (name) {
    Course.find({ country: name }, function (err, course) {
      res.status(200).json(course);
    });
  } else {
    Course.find(function (err, courses) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(courses);
        console.log();
      }
    });
  }
});

//Create new Listing
courseRoutes.route("/").post(function (req, res) {
  let course = new Course(req.body);
  course
    .save()
    .then((courses) => {
      res.status(201).json(courses);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//GET Listing by id
courseRoutes.route("/:id").get(function (req, res, next) {
  let id = req.params.id;
  Course.findById(id, function (err, course) {
    res.status(200).json(course);
  });
});

//DELETE Listing by id
courseRoutes.route("/:id").delete((req, res) => {
  Course.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).send("Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//PUT updates listing
courseRoutes.route("/:id").put(function (req, res) {
  Course.findById(req.params.id, function (err, course) {
    if (!course) res.status(404).send(err);
    else {
      course.name = req.body.nddress;
      course.country = req.body.country;
      course.address = req.body.address;
      course.open = req.body.open;
      course.information = req.body.information;
      course.website = req.body.website;

      course
        .save()
        .then((course) => {
          res.status(200).json(course);
        })
        .catch((err) => {
          next(err);
        });
    }
  });
});

app.use("/courses", courseRoutes);

//If path doesnt exist
app.use((req, res, next) => {
  const err = new Error("Path Doesn't Exist");
  err.status = 404;
  next(err);
});

//Custom Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
