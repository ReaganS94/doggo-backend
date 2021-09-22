const express = require("express");

const { getAllergy, getAllergies } = require("../controllers/allergies");

const api = express.Router();

api.route("/").get(getAllergies);

api.route("/:id").get(getAllergy);

module.exports = api;
