const User = require('../models/CatFriendly')

const getCatFriendly = async (req, res) => {
    try {
      const users = await CatFriendly.find();
      res.json({
        success: true,
        data: user,
        msg: "show cat friendly or not",
      });
    } catch (err) {
      console.log(err);
    }
  };


module.exports = {
    getCatFriendly
}