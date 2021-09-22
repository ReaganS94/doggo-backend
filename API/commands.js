const express = require("express");

const { getCommands, getCommand } = require("../controllers/commands");

const api = express.Router();

api.route("/").get(getCommands);

api.route("/:id").get(getCommand);

module.exports = api;
