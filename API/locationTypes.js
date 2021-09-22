const express = require("express");

const {
  getLocationTypes,
  getLocationType,
} = require("../controllers/locationTypes");

const api = express.Router();

api.route("/").get(getLocationTypes);

api.route("/:id").get(getLocationType);

module.exports = api;
