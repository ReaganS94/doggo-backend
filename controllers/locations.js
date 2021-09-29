const Location = require("../models/Location");

const getLocations = async (req, res) => {
  try {
    const locations = await Location.find().populate("type");
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
    const location = await Location.findById(id).populate("type");
    res.json({
      data: location,
    });
  } catch (err) {
    console.error(err);
  }
};

const createLocation = async (req, res) => {
  try {
    const { name, address, website, phone, lat, long, type } = req.body;
    const location = await Location.create({
      name,
      address,
      website,
      phone,
      lat,
      long,
      type,
    });

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
  getLocations,
  getLocation,
  createLocation,
};
