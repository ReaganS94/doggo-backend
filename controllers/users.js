const User = require('../models/User')

const getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json({
        success: true,
        data: user,
        msg: "show all users",
      });
    } catch (err) {
      console.log(err);
    }
  };

const getUser = async (req, res, next) => {
    try {
    const user = await User.findById(id);
    res.json({
        data: user
    })
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getUsers,
    getUser
}