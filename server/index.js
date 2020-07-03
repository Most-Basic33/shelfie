require('dotenv').config()
const express = require('express'),
ctrl= require('./controller'),
    { SERVER_PORT, CONNECTION_STRING } = process.env,
    massive = require('massive')
app = express()

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db);
    console.log('Hosted by DB Controller...rock on')
})

//Endpoints
app.get('/api/products', ctrl.getInventory)


app.listen(SERVER_PORT, () => console.log(`Listen To The Smooth Sounds of 3 double 3: ${SERVER_PORT}fm`))