const Location = require("../models/Location");

const getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json({
      success: true,
      data: locations,
      msg: "show all locations",
    });
  } catch (err) {
    console.log(err);
  }
};

const getLocation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);
    res.json({
      data: location,
    });
  } catch (err) {
    console.error(err);
  }
};

const createLocation = async (req, res) => {
  try {
    const { coordinates, name, type } = req.body;
    const location = await Location.create({
      coordinates,
      name,
      type,
    });

    res.json({
      msg: `added location ${id}`,
      succes: true,
      data: location,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getLocations,
  getLocation,
  createLocation,
};
