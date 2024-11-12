const express = require("express");
const app = express();
const restaurants = require("./routes/restaurants.js")
const db = require("../db/connection");

app.use('/restaurants', restaurants)
module.exports = app;