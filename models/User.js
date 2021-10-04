const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please add an username"],
    maxlength: [100, "max 100 chars are allowed for the username"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Please add enter a password"],
    maxlength: [100, "max 100 chars are allowed for the password"],
    minlength: [8, "min 8 chars are allowed for the password"],
    select: false,
  },

  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },

  phoneNumber: {
    type: String,
    required: [true, "Please add a phoneNumber"],
    match: [/^\d+$/, "Telephone number is invalid"],
  },

  profilePic: {
    type: String,
<<<<<<< HEAD
    //required: [true, "Please add a profile picture"],
=======
>>>>>>> 0eb1d6516c908dfccdca75dffc3f6184b03b8ca2
    maxlength: [2000, "max 2000 chars are allowed for the profilePic"],
  },

  about: {
    type: String,
    maxlength: [1000, "max 1000 chars are allowed for the about section"],
  },

  availability: {
    type: Boolean,
<<<<<<< HEAD
    //required: [true, "Please add your preference"],
=======
>>>>>>> 0eb1d6516c908dfccdca75dffc3f6184b03b8ca2
  },

  city: {
    type: String,
    required: [true, "Please add a location"],
    maxlength: [200, "max 200 chars are allowed for the location"],
  },

  tags: [
    {
      type: Schema.ObjectId,
      ref: "Tag",
    },
  ],

  dog: [
    {
      type: Schema.ObjectId,
      ref: "Dog",
    },
  ],
  LatLng: {
    lat: {
      type: Number,
    },

    lng: {
      type: Number,
    },
  },
});



UserSchema.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError);
          }

          user.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});





module.exports = mongoose.model("User", UserSchema, "users");
