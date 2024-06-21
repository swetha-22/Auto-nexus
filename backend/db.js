const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/auto-nexus?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1'

const connectToMongo = () => {
    mongoose.connect(mongoURI, {
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connected to mongo Successfully");
    }).catch((err) => { console.log(err) });
}
//connectToMongo();
module.exports = connectToMongo;