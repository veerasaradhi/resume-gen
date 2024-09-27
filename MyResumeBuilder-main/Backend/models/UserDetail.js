const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  number: String,
  resume: Array,
});

const UserDetail = mongoose.model("UserDetail", UserDetailSchema);

module.exports = UserDetail;
