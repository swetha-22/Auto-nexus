const express = require('express');
const router = express.Router();

//ROUTE

router.post('/notify-details', async (req, res) => {
    try {
        //Fetching data
        const { serviceCenter , date , vehiclePart ,category , collName} = req.body;

        //Connecting to MongoClient
        const { MongoClient } = require('mongodb');
        const uri = 'mongodb://127.0.0.1:27017/auto-nexus?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1';
        const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect((err) => { console.log(err) });

        //Insertion in Db - Mongo Client
        const db = client.db('auto-nexus');
        const ownerCollection = db.collection(collName);
        let data={
            serviceCenter:serviceCenter,
            category:category,
            date:date,
            vehiclePart:vehiclePart
        }
        ownerCollection.insertOne(data);
        res.send("data inserted")

    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});
router.get('/row-details/:collName', async (req,res)=>{
    try {
        const { MongoClient } = require('mongodb');
        const uri = 'mongodb://127.0.0.1:27017/auto-nexus?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1';
        const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect((err) => { console.log(err) });
        const db2 = client.db('auto-nexus');
        const ownerCollection2 = db2.collection(req.params.collName);

        const cursor = ownerCollection2.find();
        const result = await cursor.toArray();
        result.shift();
        res.send(result);

    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }

});

module.exports = router;