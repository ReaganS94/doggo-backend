const CatFriendly = require("../models/CatFriendly");

const getCatFriendly = async (req, res) => {
  try {
    const catFriendly = await CatFriendly.find();
    res.json({
      success: true,
      data: catFriendly,
      msg: "show cat friendly or not",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCatFriendly,
};
