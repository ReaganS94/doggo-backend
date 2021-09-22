const mongoose = require("mongoose");

const { Schema } = mongoose;

const LocationTypeSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a location category"],
    maxlength: [300, "max 300 chars are allowed for the location category"],
  },
});

module.exports = mongoose.model("LocationType", LocationTypeSchema);
