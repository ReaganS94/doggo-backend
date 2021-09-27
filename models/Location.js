const mongoose = require("mongoose");

const { Schema } = mongoose;

const LocationSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    maxlength: [300, "max 300 chars are allowed for the name"],
  },

  address: {
    type: String,
    required: [true, "Please add an address"],
    maxlength: [300, "max 300 chars are allowed for the address"],
  },

  type: {
    type: Schema.ObjectId,
    ref: "LocationType",
    required: [true, "Please add the type of the location"],
  },
});

module.exports = mongoose.model("Location", LocationSchema, "locations");
