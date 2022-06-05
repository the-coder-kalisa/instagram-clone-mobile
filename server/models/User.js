const mongoose = require("mongoose");
const User = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
    min: 5,
  },
  username: {
    type: String,
    required: true,
    max: 10,
  },
  password: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("users", User);
