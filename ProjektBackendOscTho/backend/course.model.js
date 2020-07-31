const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Course = new Schema({
  name: {
    type: String,
  },
  country: {
    type: String,
  },
  address: {
    type: String,
  },
  open: {
    type: Boolean,
  },
  information: {
    type: String,
  },
  website: {
    type: String,
  },
  id: {
    type: Number,
  },
});

module.exports = mongoose.model("Course", Course);
