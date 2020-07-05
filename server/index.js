require('dotenv').config()
const express = require('express'),
    ctrl = require('./controller'),
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
app.get('/api/inventory', ctrl.getInventory);
app.get('/api/inventory/:id', ctrl.getInventoryItem);
app.get('/api/inventorys/:name', ctrl.getInventoryByName)
app.post('/api/inventory', ctrl.addInventory);
app.delete('/api/inventory/:id', ctrl.deleteInventory);
app.put('/api/inventory/:id', ctrl.updateInventoryPrice)//update price


app.listen(SERVER_PORT, () => console.log(`Listen To The Smooth Sounds of 3 double O 3: ${SERVER_PORT}fm`))