const Command = require("../models/Command");

const getCommands = async (req, res) => {
  try {
    const commands = await Command.find();
    res.json({
      success: true,
      data: command,
      msg: "show all commands",
    });
  } catch (err) {
    console.log(err);
  }
};

const getCommand = async (req, res, next) => {
  try {
    const command = await Command.findById(id);
    res.json({
      data: command,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getCommands,
  getCommand,
};
