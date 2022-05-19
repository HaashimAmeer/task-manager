const mongoose = require("mongoose");

//Structure for schema - data type requirements for <k,v> pair
const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

module.exports = mongoose.model("Task", TaskSchema);
