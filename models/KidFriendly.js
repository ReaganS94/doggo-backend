const mongoose = require("mongoose");

const { Schema } = mongoose;

const KidFriendlySchema = new Schema({
  validation: {
    type: Boolean,
    required: [true, "Please select y/n"],
  },
});

module.exports = mongoose.model(
  "KidFriendly",
  KidFriendlySchema,
  "kidfriendly"
);
