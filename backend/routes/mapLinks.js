const express = require('express');
const router = express.Router();
const geolib = require('geolib');
// 2b761ec650774ac8a2219c0e8e615a5b
const apiKey = '65c39eea06ee479eb251de587cbd2848';
// const address1 = 'KUN Exclusive, Hitech City, Hyderabad , 500081';
// const address2 = 'vijayapuri colony, hyderabad , 500070';

//ROUTE:1 get details of vehicle
router.post('/map-link', async (req, res) => {

    let {address1} = req.body;
    // Connect to Mongo
    const { MongoClient } = require('mongodb');
    const uri = 'mongodb://127.0.0.1:27017/auto-nexus';
    const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect((err) => { console.log(err) });
    //Insertion in Db - Mongo Client
    const db = client.db('auto-nexus');
    const ownerCollection = db.collection(req.body.collName);
    const data = await ownerCollection.findOne({ id: req.body.collName });
    // console.log(data);
    let brand = data.make;
    // console.log(brand)
    const db2 = client.db('showrooms');
    const distanceCollection = db2.collection(String(brand));
    const cursor = await distanceCollection.find();
    const result = await cursor.toArray();
    // console.log(result)

    let final=[]
    for (let i = 0; i < result.length; i++) {
        let address2= result[i].address
        // let distance = await getDistance(address1, address2);

        // let link = getDirectionsLink(address1,address2 )
        final.push({
            "source": address1,
            "dest": address2,
            // "distance": distance,
            "gMapLink": `https://www.google.com/maps/dir/?api=1&origin=${address1}&destination=${address2}&travelmode=driving&dir_action=navigate`
        })
    }

    res.send(final);

    async function getDistance(address1, address2) {
        const coords1 = await getCoords(address1);
        const coords2 = await getCoords(address2);
        console.log(coords1, coords2);
        const distance = geolib.getDistance(coords1, coords2);
        console.log(distance)
        return distance;
    }

    async function getCoords(address) {
        console.log(address);
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}&language=en&pretty=1`;
        const response = await fetch(url);
        const json = await response.json();
        const coords = json.results[0].geometry;
        return coords;
    }

    // async function getDirectionsLink(address1, address2) {
    //     return `https://www.google.com/maps/dir/?api=1&origin=${address1}&destination=${address2}&travelmode=driving&dir_action=navigate`
    // }
});

module.exports = router
