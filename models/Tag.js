const mongoose = require("mongoose");

const { Schema } = mongoose;

const TagSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a tag"],
    maxlength: [300, "max 300 chars are allowed for the tag"],
  },
});

module.exports = mongoose.model("Tag", TagSchema, "tags");
