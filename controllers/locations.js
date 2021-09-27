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
      msg: `added location ${id}`,
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
