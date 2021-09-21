const express = require("express");

const { getKidFriendly } = require("../controllers/kidFriendly");

const api = express.Router();

api.route("/").get(getKidFriendly);

module.exports = api;
