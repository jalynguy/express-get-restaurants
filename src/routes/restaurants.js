const express = require("express");
const restaurants = express.Router();
const Restaurant = require("../../models/Restaurant")
const db = require("../../db/connection.js");

//TODO: Create your GET Request Route Below: 

restaurants.get('/', async (req, res)=>{
    const result = await Restaurant.findAll();
    res.send(result).json();
});


restaurants.get('/:id', async (req, res) => {
    const result = await Restaurant.findByPk(req.params.id);
    res.send(result).json();
});


restaurants.use(express.json());
restaurants.use(express.urlencoded());

restaurants.post('/', async (req,res)=>{
    const result = await Restaurant.create(req.body);
    res.send(result);
});

restaurants.put('/:id', async (req, res)=>{
    const id = req.params.id;
    const result = await Restaurant.update( req.body ,{
        where: {
            id: id
        }
    })
    res.send(result);
})
restaurants.delete('/:id', async (req, res) => {
    const result = await Restaurant.findByPk(req.params.id);
    result.destroy();
    res.send(result).json();

})
module.exports = restaurants;