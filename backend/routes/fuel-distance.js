const express = require('express');
const router = express.Router();
const axios = require('axios');
const https = require('https');

//ROUTE:1 get details of vehicle
router.post('/fuel-distance', async (req, res) => {
    try {
        let { distanceTravelled, daysElapsed, usageCount, collName} = req.body;

        //Connecting to MongoClient
        const { MongoClient } = require('mongodb');
        const uri = 'mongodb://127.0.0.1:27017/auto-nexus?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1';
        const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect((err) => { console.log(err) });

        //Insertion in Db - Mongo Client
        const db = client.db('auto-nexus');
        const ownerCollection = db.collection(collName);
        const data = await ownerCollection.findOne({ id: collName });
        console.log(data);

        const vin = 'KNDJ23AU4N7154467';
        const url = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`;
        let modelId;

        await new Promise((resolve, reject) => {
            https.get(url, (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    const vehicleData = JSON.parse(data);
                    let mod = vehicleData.Results;
                    for (let i = 0; i < mod.length; i++) {
                        if (mod[i].Variable === 'Model') {
                            console.log(mod[i].ValueId);
                            modelId=mod[i].ValueId;
                            break;
                        }
                    }
                    resolve();
                });
            }).on('error', (err) => {
                console.error(`Error: ${err.message}`);
                reject(err);
            });
        });
    
        const fuelEconomyUrl = `https://www.fueleconomy.gov/ws/rest/vehicle/${modelId}`;
        const fuelEconomyResponse = await axios.get(fuelEconomyUrl);
        const fuelEconomyData = fuelEconomyResponse.data;
        const cityMpg = fuelEconomyData.city08;
        const highwayMpg = fuelEconomyData.highway08;
    
        // Calculate fuel consumed and distance travelled daily
        const fuelConsumed = distanceTravelled / ((cityMpg + highwayMpg) / 2);
        const distanceTravelledDaily = usageCount / daysElapsed;
    
        // Print the results
        console.log(`Fuel consumed: ${fuelConsumed} gallons`);
        console.log(`Distance travelled daily: ${distanceTravelledDaily} miles`);
        res.send({ fuel: fuelConsumed, distance: distanceTravelledDaily });

        // res.send({fuelConsumed,distanceTravelledDaily})
        

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;