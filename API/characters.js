const express = require("express");

const { getCharacters, getCharacter } = require("../controllers/characters");

const api = express.Router();

api.route("/").get(getCharacters);

api.route("/:id").get(getCharacter);

module.exports = api;
