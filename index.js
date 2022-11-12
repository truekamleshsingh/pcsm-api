// ENV 
const dotenv = require('dotenv').config()

//express
const express = require('express')

// connection 
const Connection = require('./connection/connect_db')

//Routes
const routes = require('./routes/routes')
const cors = require('cors')

const mongo_db_url = process.env.DATABASE_URL
const PORT = process.env.PORT || 3001

//create running server app
const app = express()
app.use(cors())
app.use(express.json());

// its just for showing a message that starts our server
app.get('/', (req, res) => {
    res.json("Server Starts")
})


//Routes
app.use('/', routes)

//listening on port
app.listen(PORT, () => {
    console.log(`Server is Running on PORT ${PORT}`)
    Connection(mongo_db_url)
})









