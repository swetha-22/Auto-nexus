const mongoose = require('mongoose');
const {Schema}=mongoose;
const OwnerSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    VIN:{
        type:String,
        required:true
    },
    city:{
        type: String,
        required: true
    },
    pincode:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    emp_id:{
        type:String
    }
});
const Owner=mongoose.model('owner',OwnerSchema,"Owners");
module.exports=Owner;