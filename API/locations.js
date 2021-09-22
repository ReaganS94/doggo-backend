const express = require("express");

const { getLocations, getLocation } = require("../controllers/locations");

const api = express.Router();

api.route("/").get(getLocations);

api.route("/:id").get(getLocation);

module.exports = api;
