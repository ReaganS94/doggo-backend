const Castrated = require("../models/Castrated");

const getCastrated = async (req, res) => {
  try {
    const castrated = await Castrated.find();
    res.json({
      success: true,
      data: castrated,
      msg: "show all castrated",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCastrated,
};
