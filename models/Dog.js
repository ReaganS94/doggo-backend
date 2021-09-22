const mongoose = require("mongoose");

const { Schema } = mongoose;

const DogSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a dog name"],
    maxlength: [200, "max 200 chars are allowed for the name"],
  },

  breed: {
    type: String,
    required: [true, "Please add a breed"],
    maxlength: [200, "max 200 chars are allowed for the breed"],
  },

  size: {
    type: Number,
    required: [true, "Please add a size"],
    max: [200, "max 200 chars are allowed for the size"],
  },

  age: {
    type: Number,
    required: [true, "Please add an age"],
    max: [2, "max 2 chars are allowed for the age"],
  },

  about: {
    type: String,
    maxlength: [1000, "max 1000 chars are allowed for the about section"],
  },

  profilePic: {
    type: String,
    required: [true, "Please add a profilePic"],
    maxlength: [200, "max 200 chars are allowed for the profilePic"],
  },

  parent: {
    type: Schema.ObjectId,
    ref: "User",
  },

  kidFriendly: {
    type: Scheme.ObjectId,
    ref: "KidFriendly",
  },

  catFriendly: {
    type: Scheme.ObjectId,
    ref: "CatFriendly",
  },

  allergies: {
    type: Scheme.ObjectId,
    ref: "Allergies",
  },

  castrated: {
    type: Scheme.ObjectId,
    ref: "Castrated",
  },

  character: {
    type: Scheme.ObjectId,
    ref: "Character",
  },

  command: {
    type: Scheme.ObjectId,
    ref: "Command",
  },
});

module.exports = mongoose.model("Dog", DogSchema);
