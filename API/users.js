const express = require("express");

const api = express.Router();

const { getUsers, getUser } = require("../controllers/users");

api.route("/").get(getUsers);

api.route("/:id").get(getUser);

module.exports = api;
