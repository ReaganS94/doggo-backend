const Characters = require("../models/Character");

const getCharacters = async (req, res) => {
  try {
    const characters = await Characters.find();
    res.json({
      success: true,
      data: characters,
    });
  } catch (err) {
    console.log(err);
  }
};

const getCharacter = async (req, res, next) => {
  try {
    const character = await Characters.findById(id);
    res.json({
      success: true,
      data: character,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getCharacter, getCharacters };
