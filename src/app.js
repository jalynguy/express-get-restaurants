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


app.use(express.json());
app.use(express.urlencoded());

app.post('/restaurants', async (req,res)=>{
    const result = await Restaurant.create({name: 'Kendrick Lamar', instrument: 'Voice'});
    res.send(result);
});

app.put('/restaurants/:id', async (req, res)=>{
    const id = req.params.id;
    const result = await Restaurant.update( req.body ,{
        where: {
            id: id
        }
    })
    res.send(result);
})
app.delete('/restaurants/:id', async (req, res) => {
    const result = await Restaurant.findByPk(req.params.id);
    result.destroy();
    res.send(result).json();
})
module.exports = app;