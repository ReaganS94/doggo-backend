// const { Decimal128 } = require("mongoose");
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

  website: {
    type: String,
    maxlength: [300, "max 300 chars are allowed for the website"],
  },

  phone: {
    type: String,
    maxlength: [25, "max 25 chars are allowed for phone"],
  },

  LatLng: {
    lat: {
      type: Number,
      required: [true, "Please add latitude"],
    },

    lng: {
      type: Number,
      required: [true, "Please add longitude"],
    },
  },

  type: {
    type: Schema.ObjectId,
    ref: "LocationType",
    required: [true, "Please add the type of the location"],
  },
});

module.exports = mongoose.model("Location", LocationSchema, "locations");
