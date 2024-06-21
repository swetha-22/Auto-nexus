const express = require('express');
const Owner = require('../models/Owner');
const router = express.Router();

const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET = "Abhiisagoodb$oy";
let employee_id
//ROUTE 1:create a User using: POST "/api/auth/createuser" . No login required
router.post('/createowner', [
    body('name', 'Enter a Valid name').isLength({ min: 3 }),
    body('email', 'Enter a Valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
    body('VIN', 'Enter a Valid VIN').isLength(17),
    body('city', 'Enter a Valid city').isLength({ min: 3 }),
    body('pincode', 'Enter a Valid pincode').isLength(6),
], async (req, res) => {
    let success = false
    //If there are errors return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    //check whether the user with this email exists already
    try {
        let owner = await Owner.findOne({ email: req.body.email });
        if (owner) {
            return res.status(400).json({ success, error: "Sorry a user with this email already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        //Generating emp id
        let emp_name = req.body.name;
        let rand = Math.floor(Math.random() * 1000);
        employee_id = emp_name + "-" + rand;

        //create a new user
        owner = await Owner.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
            VIN: req.body.VIN,
            city: req.body.city,
            pincode: req.body.pincode,
            emp_id:employee_id
        })
        // res.json({ status: "successfully created" });
    } catch (error) {
        console.error(error.message);
        // res.status(500).send("Internal Server Error");
    }

    // Fetch vehicle data through VIN
    try {
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/octet-stream',
                'X-RapidAPI-Key': 'e3fe6ef1d3msh371d6e7eff58b3ep1733e1jsnf8c4d3348d8f',
                'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
            }
        };  
        const fetchModule = await import('node-fetch');
        const fetch = fetchModule.default;
        const response = await fetch(`https://car-api2.p.rapidapi.com/api/vin/${req.body.VIN}`, options);
        const data = await response.json();
        data.status = true;
        // res.json(data);
        res.json({ success: true, emp_id: employee_id });

        // Store owner's vehicle data in new collection
        //Connecting to MongoClient
        const { MongoClient } = require('mongodb');
        const uri = 'mongodb://127.0.0.1:27017/auto-nexus?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1';
        const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect((err) => { console.log(err) });

        //Insertion in Db - Mongo Client
        const db = client.db('auto-nexus');
        const ownerCollection =db.collection(employee_id);
        data.id=employee_id;
        data.VIN=req.body.VIN;
        ownerCollection.insertOne(data);

    }
    catch (error) {
        console.error(error);
    }

})
//ROUTE 2: Authenticate a user using post "api/auth/login". No login required
router.post('/login', [
    body('email', 'Enter a Valid email').isEmail(),
    body('password', 'Password entered is incorrect').exists(),
], async (req, res) => {
    let success = false
    //If there are errors return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    //check whether the user with this email exists or not
    const { email, password } = req.body;
    try {
        let owner = await Owner.findOne({ email });
        if (!owner) {
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, owner.password);
        if (!passwordCompare) {
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }
        res.json({ status: "successfully logged in",success:"true",emp_id:owner.emp_id });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router