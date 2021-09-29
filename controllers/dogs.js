const Dog = require("../models/Dog");

const getDogs = async (req, res) => {
  try {
    const dogs = await Dog.find(req.query).populate("character commands user");
    res.json({
      success: true,
      data: dogs,
      msg: "show all the dogs",
    });
  } catch (err) {
    console.log(err);
  }
};

const getDog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dog = await Dog.findById(id)
      .populate("character")
      .populate("commands")
      .populate("user");
    res.json({
      data: dog,
    });
  } catch (err) {
    next(err);
  }
};

const createDog = async (req, res) => {
  try {
    const {
      name,
      breed,
      size,
      age,
      about,
      profilePic,
      kidFriendly,
      catFriendly,
      allergies,
      castrated,
      character,
      commands,
      galleryPhotos,
    } = req.body;
    const location = await Location.create({
      name,
      breed,
      size,
      age,
      about,
      profilePic,
      kidFriendly,
      catFriendly,
      allergies,
      castrated,
      character,
      commands,
      galleryPhotos,
    });

    ///curl -d '{"name": "puppy", "breed": "test", "size": 4‚ "age": 5, "about": "test", "profilePic": "test", "castrated": true, "kidfriendly": true, "allergies": false}' -H "Content-Type: application/json" -X POST http://localhost:5000/dogs

    res.json({
      msg: `added location`,
      success: true,
      data: location,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getDogs,
  getDog,
  createDog,
};
