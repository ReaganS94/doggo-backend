const Dog = require("../models/Dog");

const getDogs = async (req, res) => {
  try {
    const dogs = await Dog.find(req.query).populate(
      "character commands parent"
    );
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
    const dog = await Dog.findById(id);
    res.json({
      data: dog,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getDogs,
  getDog,
};
