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
    const dog = await Dog.create({
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

    res.json({
      success: true,
      data: dog,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      data: err,
    });
  }
};

module.exports = {
  getDogs,
  getDog,
  createDog,
};
