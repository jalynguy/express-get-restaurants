const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 


app.get('/restaurants', async (req, res)=>{
    const result = await Restaurant.findAll();
    res.send(result).json();
});


app.get('/restaurants/:id', async (req, res) => {
    const result = await Restaurant.findByPk(req.params.id);
    res.send(result).json();
});

module.exports = app;