const Tags = require("../models/Tag");

const getTags = async (req, res) => {
  try {
    const tags = await Tags.find();
    res.json({
      success: true,
      data: tags,
    });
  } catch (err) {
    console.log(err);
  }
};

const getTag = async (req, res, next) => {
  try {
    const tag = await Tags.findById(id);
    res.json({
      success: true,
      data: tag,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getTag, getTags };
