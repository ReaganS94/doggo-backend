const KidFriendly = require("../models/KidFriendly");

const getKidFriendly = async (req, res, next) => {
  try {
    const kidFriendly = await KidFriendly.find();
    res.json({
      success: true,
      data: kidFriendly,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getKidFriendly };
