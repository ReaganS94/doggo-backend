const mongoose = require("mongoose");

const { Schema } = mongoose;

const CommandSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a command"],
    maxlength: [300, "max 300 chars are allowed for the character"],
  },
});

module.exports = mongoose.model("Command", CommandSchema);
