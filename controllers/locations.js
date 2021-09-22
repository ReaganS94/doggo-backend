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

module.exports = {
  getLocations,
  getLocation,
};
