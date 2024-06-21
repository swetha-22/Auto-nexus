const express = require('express');
const Owner = require('../models/Owner');
const router = express.Router();


//ROUTE:1 get details of vehicle
router.get('/vehicle_details/:collName', async (req, res) => {
    try 
    {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9e2d2e339dmsh2b11de44572350ep106cb9jsn5b884c59b124',
                'X-RapidAPI-Host': 'vindecoder.p.rapidapi.com'
            }
        };
        let ownerName=(req.params.collName).split('-')[0];
        console.log(ownerName)
        const owner = await Owner.find({ name: String(ownerName) });
        // console.log(owner[0])
        const vin_num = owner[0].VIN;
        // console.log(vin_num)
        const fetchModule = await import('node-fetch');
        const fetch = fetchModule.default;
        const response = await fetch(`https://vin-decoder28.p.rapidapi.com/api/v1/rapid-api-vin-decoder?vin=${vin_num}`, options);
        const data = await response.json();
        res.json(data);
        console.log(data);
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router

