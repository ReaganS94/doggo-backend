const express = require("express");

const { getDogs, getDog, createDog } = require("../controllers/dogs");

const api = express.Router();

api.route("/").get(getDogs).post(createDog);

api.route("/:id").get(getDog);

module.exports = api;
