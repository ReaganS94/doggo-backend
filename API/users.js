const express = require('express')

const { getUsers, getUser } = require("../controllers/users");

const api = express.Router()

api.route('/').get(getUsers);

api.route('/:id').get(getUser);

module.exports = api;