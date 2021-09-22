const express = require('express')

const { getDogs, getDog } = require("../controllers/dogs");

const api = express.Router()

api.route('/').get(getDogs);

api.route('/:id').get(getDog);

module.exports = api;