const connectToMongo=require('./db');
const express = require('express')
var cors=require('cors')
connectToMongo();
const app = express();
const port = 5000

app.use(cors())
app.use(express.json())

//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/vehicle',require('./routes/vehicle'))
app.use('/api/gMap',require('./routes/mapLinks'))
app.use('/api/fuel-distance',require('./routes/fuel-distance'))
app.use('/api/vehicle-health',require('./routes/health-status'))
app.use('/api/notify',require('./routes/sms'))
app.use('/api/notify-details',require('./routes/notify'))
app.use('/api/weather',require('./routes/weather'))

app.listen(port, () => {
  console.log(`autonexus backend listening on port ${port}`)
})