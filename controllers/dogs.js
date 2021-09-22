const Dog = require('../models/Dog')

const getDogs = async (req, res) => {
    try {
      const dogs = await Dog.find();
      res.json({
        success: true,
        data: dogs,
        msg: "show all the dogs",
      });
    } catch (err) {
      console.log(err);
    }
  };

const getDog = async (req, res, next) => {
    try {
    const dog = await Dog.findById(id);
    res.json({
        data: dogs
    })
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getDogs,
    getDog
}