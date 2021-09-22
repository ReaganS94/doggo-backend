const express = require('express')

const { getCastrated } = require("../controllers/castrated");

const api = express.Router()

api.route('/').get(getCastrated);

// api.route('/:id').get(getUser);

module.exports = api;