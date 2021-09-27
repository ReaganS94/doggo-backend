const express = require("express");

const {
  getLocations,
  getLocation,
  createLocation,
} = require("../controllers/locations");

const api = express.Router();

api.route("/").get(getLocations).post(createLocation);

api.route("/:id").get(getLocation);

module.exports = api;
