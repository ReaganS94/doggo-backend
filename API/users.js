const express = require("express");

const { getUsers, getUser, createUser, updateUser } = require("../controllers/users");

const api = express.Router();

api.route("/")
.get(getUsers)
.post(createUser); 

api.route("/:id")
.get(getUser)
.put(updateUser);

module.exports = api;
