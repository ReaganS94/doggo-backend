const Location = require("../models/Location");

const getLocations = async (req, res) => {
  try {
    const locations = await Location.find(req.query).populate("type");
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
    const { name, address, website, phone, LatLng, type } = req.body;
    const location = await Location.create({
      name,
      address,
      website,
      phone,
      LatLng,
      type,
    });
    res.json({
      success: true,
      data: location,
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
  getLocations,
  getLocation,
  createLocation,
};
