const Allergy = require("../models/Allergy");

const getAllergies = async (req, res) => {
  try {
    const allergies = await Allergy.find();
    res.json({
      success: true,
      data: allergies,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllergy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const allergy = await Allergy.findById(id);
    res.json({
      success: true,
      data: allergy,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getAllergy, getAllergies };
