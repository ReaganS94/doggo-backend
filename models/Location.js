const mongoose = require("mongoose");

const { Schema } = mongoose;

const LocationSchema = new Schema({
  coordinates: [
    {
      type: String,
      required: [true, "Please add coordinates"],
      //match - regular expression
    },
  ],

  name: {
    type: String,
    required: [true, "Please add a name"],
    maxlength: [300, "max 300 chars are allowed for the name"],
  },

  type: {
    type: Schema.ObjectId,
    ref: "LocationType",
    required: [true, "Please add the type of the location"],
  },
});

module.exports = mongoose.model("Location", LocationSchema);
