const express = require('express')

const { getCatFriendly } = require("../controllers/catFriendly");

const api = express.Router()

api.route('/').get(getCatFriendly);


module.exports = api;