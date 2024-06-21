const express = require('express');
const router = express.Router();
let vehicle;

//ROUTE:1 
router.post('/vehicle-health', async (req, res) => 
{
    try 
    {
        //Connecting to MongoClient
        const { MongoClient } = require('mongodb');
        const uri = 'mongodb://127.0.0.1:27017/auto-nexus?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1';
        const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect((err) => { console.log(err) });

        //Insertion in Db - Mongo Client
        const db = client.db('auto-nexus');
        const ownerCollection = db.collection(req.body.collName);
        const data = await ownerCollection.findOne({ id: req.body.collName });
        // console.log(data);
        let brand = data.make;
        console.log(brand)

        const db2 = client.db('vehicle-health');
        const healthCollection = db2.collection("health-status");

        const cursor = await healthCollection.find();
        const result = await cursor.toArray();
        // console.log(result);

        for (let index = 0; index < result.length; index++) {
            if (result[index].brand === brand) {
                vehicle = result[index];
                // console.log(vehicle);
            }
        }

        let {engine,transmission,brakes,battery,suspension,tires} =req.body;

        let mean_life=[vehicle.engine,vehicle.transmission,vehicle.brakes,vehicle.battery,vehicle.suspension,vehicle.tires]
        let usage_count=[engine,transmission,brakes,battery,suspension,tires]
        let part_names =["engine","transmission","brakes","battery","suspension","tires"]

        let output=[];
        
        for (let i = 0; i < part_names.length; i++) {
            const basePercentage = ( usage_count[i] / mean_life[i] ) * 100;
            if(basePercentage>=80){
                part_status="good";
            }
            else if(basePercentage>=50){
                part_status="warning";
            }
            else{
                part_status="emergency";
            }
            
            output.push(
                {
                    part:part_names[i],
                    percent:basePercentage,
                    condition:part_status
                }
            )
        }

        console.log(res);
        res.send(output)

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;