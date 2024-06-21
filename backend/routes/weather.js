const express = require('express');
const router = express.Router();
// const Weather = require('../models/Weather');
// const host = "http://localhost:5000";

//ROUTE:1 get details of summer
router.get('/summer', async (req, res) => {
    const { MongoClient } = require('mongodb');
    const uri = 'mongodb://127.0.0.1:27017/Weather';
    const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect((err) => { console.log(err) });
    const db = client.db('Weather');
    const summer = db.collection("Summer");
    const docs = await summer.find({}).toArray();
    // console.log("Found the following documents:");
    res.send(docs);
});
router.get('/winter', async (req, res) => {
    const { MongoClient } = require('mongodb');
    const uri = 'mongodb://127.0.0.1:27017/Weather';
    const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect((err) => { console.log(err) });
    const db = client.db('Weather');
    const winter = db.collection("Winter");
    const docs = await winter.find({}).toArray();
    // console.log("Found the following documents:");
    // console.log(docs);
    res.send(docs);
});
router.get('/spring', async (req, res) => {
    const { MongoClient } = require('mongodb');
    const uri = 'mongodb://127.0.0.1:27017/Weather';
    const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect((err) => { console.log(err) });
    const db = client.db('Weather');
    const spring = db.collection("Spring");
    const docs = await spring.find({}).toArray();
    // console.log("Found the following documents:");
    // console.log(docs);
    res.send(docs);
});
router.get('/rainy', async (req, res) => {
    const { MongoClient } = require('mongodb');
    const uri = 'mongodb://127.0.0.1:27017/Weather';
    const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect((err) => { console.log(err) });
    const db = client.db('Weather');
    const rainy = db.collection("Rainy");
    const docs = await rainy.find({}).toArray();
    // console.log("Found the following documents:");
    // console.log(docs);
    res.send(docs);
});
module.exports = router;