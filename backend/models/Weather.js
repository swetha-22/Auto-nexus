const mongoose = require('mongoose');
const { Component } = require('react');
const {Schema}=mongoose;
const WeatherSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    Season:{
        type: String,
        required: true
    },
    VehicleComponent:{
        type: String,
        required: true
    },
    Effect:{
        type: String,
        required: true
    },
    Maintenance:{
        type: String,
        required: true
    },
    Cure:{
        type: String,
        required: true
    },
   
});
const Weather=mongoose.model('weather',WeatherSchema);
module.exports=Weather;